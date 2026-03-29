mod entities;
mod error;
mod model;
mod routes;

use axum::{
    Router,
    http::{self, HeaderValue, Method},
    routing::post,
};
use migration::{Migrator, MigratorTrait};
use sea_orm::{Database, DatabaseConnection};
use std::{
    env, io,
    path::{Path, PathBuf},
};
use tokio::net::TcpListener;
use tower_http::cors::CorsLayer;
use tracing::info;
use tracing_appender::non_blocking::WorkerGuard;
use tracing_subscriber::{EnvFilter, Layer, layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenv::dotenv().ok();

    let data_path = PathBuf::from("./data");

    let _guard = init_tracing(&data_path);

    info!("Starting server...");

    let back_end_host = env::var("BACK_END_HOST").expect("BACK_END_HOST must be set");
    let listener = TcpListener::bind(&back_end_host).await?;

    info!("Listening on: http://{}", back_end_host);

    axum::serve(listener, init_app(&data_path).await?).await?;

    Ok(())
}

fn init_tracing<P: AsRef<Path>>(data_path: P) -> WorkerGuard {
    let file_appender =
        tracing_appender::rolling::daily(data_path.as_ref().join("logs"), "backend");
    let (non_blocking, guard) = tracing_appender::non_blocking(file_appender);

    tracing_subscriber::registry()
        .with(
            tracing_subscriber::fmt::layer()
                .with_writer(io::stdout)
                .with_filter(
                    EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("info")),
                ),
        )
        .with(
            tracing_subscriber::fmt::layer()
                .with_writer(non_blocking)
                .with_ansi(false)
                .with_filter(EnvFilter::new("trace")),
        )
        .init();

    guard
}

async fn init_db<P: AsRef<Path>>(data_path: P) -> anyhow::Result<DatabaseConnection> {
    let db_path = PathBuf::from(data_path.as_ref().join("db.sqlite"));
    let db_uri = format!("sqlite://{}?mode=rwc", db_path.display());
    let db_conn = Database::connect(db_uri).await?;

    Migrator::up(&db_conn, None).await?;

    Ok(db_conn)
}

async fn init_app<P: AsRef<Path>>(data_path: P) -> anyhow::Result<Router> {
    let front_end_domain = env::var("FRONT_END_DOMAIN").expect("FRONTEND_DOMAIN must be set");

    let db_conn = init_db(&data_path).await?;

    Ok(Router::new()
        .nest(
            "/api",
            Router::new().route("/device-metrics", post(routes::device_metrics)),
        )
        .fallback(routes::not_found)
        .layer(
            CorsLayer::new()
                .allow_origin(front_end_domain.parse::<HeaderValue>()?)
                .allow_methods([Method::GET, Method::POST])
                .allow_headers([http::header::CONTENT_TYPE]),
        )
        .with_state(db_conn))
}
