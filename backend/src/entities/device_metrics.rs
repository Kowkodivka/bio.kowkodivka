use sea_orm::{FromJsonQueryResult, entity::prelude::*};
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Serialize, Deserialize, DeriveEntityModel)]
#[sea_orm(table_name = "device_metrics")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub ip: String,
    pub timestamp: DateTimeUtc,
    pub user_agent: String,
    pub language: String,
    #[sea_orm(column_type = "JsonBinary")]
    pub screen: ScreenMetrics,
    #[sea_orm(column_type = "JsonBinary")]
    pub window: WindowMetrics,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, FromJsonQueryResult)]
pub struct ScreenMetrics {
    pub width: u32,
    pub height: u32,
    pub avail_width: u32,
    pub avail_height: u32,
    pub color_depth: u32,
    pub pixel_depth: u32,
    pub orientation: String,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, FromJsonQueryResult)]
pub struct WindowMetrics {
    pub inner_width: u32,
    pub inner_height: u32,
    pub device_pixel_ratio: f64,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
