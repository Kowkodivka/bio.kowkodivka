use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
};

use crate::model::respond;

pub struct AppError(anyhow::Error);

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        respond::<String>(
            StatusCode::INTERNAL_SERVER_ERROR,
            None,
            Some(self.0.to_string()),
        )
        .into_response()
    }
}

impl<E> From<E> for AppError
where
    E: Into<anyhow::Error>,
{
    fn from(err: E) -> Self {
        Self(err.into())
    }
}
