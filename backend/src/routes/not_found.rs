use axum::{http::StatusCode, response::IntoResponse};

use crate::{error::AppError, model::respond};

pub async fn not_found() -> Result<impl IntoResponse, AppError> {
    Ok(respond::<()>(StatusCode::NOT_FOUND, None, None))
}
