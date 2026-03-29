use axum::{Json, http::StatusCode, response::IntoResponse};
use serde::Serialize;

#[derive(Serialize)]
pub struct ApiResponse<T> {
    status: u16,
    message: Option<String>,
    data: Option<T>,
}

pub fn respond<T: Serialize>(
    status: StatusCode,
    message: Option<&str>,
    data: Option<T>,
) -> impl IntoResponse {
    let body = ApiResponse {
        status: status.as_u16(),
        message: message.map(|m| m.to_string()),
        data,
    };

    (status, Json(body))
}
