use axum::{Json, extract::State, http::{StatusCode, HeaderMap}, response::IntoResponse};
use sea_orm::{ActiveModelTrait, DatabaseConnection, Set, prelude::DateTimeUtc};
use serde::{Deserialize, Serialize};

use crate::{entities::device_metrics, error::AppError, model::respond};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeviceMetricsRequest {
    pub timestamp: DateTimeUtc,
    pub user_agent: String,
    pub language: String,
    pub screen: device_metrics::ScreenMetrics,
    pub window: device_metrics::WindowMetrics,
}

pub async fn device_metrics(
    headers: HeaderMap,
    State(db_conn): State<DatabaseConnection>,
    Json(payload): Json<DeviceMetricsRequest>,
) -> Result<impl IntoResponse, AppError> {
    let ip = headers
        .get("x-forwarded-for")
        .and_then(|v| v.to_str().ok())
        .and_then(|v| v.split(',').next())
        .map(|v| v.trim().to_string())
        .unwrap_or_else(|| "unknown".to_string());

    let active_model = device_metrics::ActiveModel {
        ip: Set(ip),
        timestamp: Set(payload.timestamp),
        user_agent: Set(payload.user_agent),
        language: Set(payload.language),
        screen: Set(payload.screen),
        window: Set(payload.window),
        ..Default::default()
    };

    active_model.insert(&db_conn).await?;

    Ok(respond::<()>(StatusCode::OK, None, None))
}

#[cfg(test)]
mod tests {
    use super::*;

    use migration::{Migrator, MigratorTrait};
    use sea_orm::Database;

    #[tokio::test]
    async fn test_device_metrics_insert() {
        let db_conn = Database::connect("sqlite::memory:").await.unwrap();
        Migrator::up(&db_conn, None).await.unwrap();

        let payload = DeviceMetricsRequest {
            timestamp: chrono::Utc::now(),
            user_agent: "test-agent".to_string(),
            language: "en".to_string(),
            screen: device_metrics::ScreenMetrics {
                width: 1920,
                height: 1080,
                avail_width: 1920,
                avail_height: 1040,
                color_depth: 24,
                pixel_depth: 24,
                orientation: "landscape".to_string(),
            },
            window: device_metrics::WindowMetrics {
                inner_width: 1280,
                inner_height: 720,
                device_pixel_ratio: 1.0,
            },
        };

        let result = device_metrics(HeaderMap::new(), State(db_conn), Json(payload)).await;

        assert!(result.is_ok());
    }
}
