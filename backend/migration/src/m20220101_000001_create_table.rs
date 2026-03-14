use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager.create_table(
            Table::create()
                .table(DeviceMetrics::Table)
                .if_not_exists()
                .col(big_integer(DeviceMetrics::Id).not_null().auto_increment().primary_key())
                .col(timestamp(DeviceMetrics::Timestamp).not_null())
                .col(string(DeviceMetrics::UserAgent).not_null())
                .col(string(DeviceMetrics::Language).not_null())
                .col(json_binary(DeviceMetrics::Screen).not_null())
                .col(json_binary(DeviceMetrics::Window).not_null())
                .to_owned(),
        ).await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager.drop_table(Table::drop().table(DeviceMetrics::Table).to_owned()).await?;

        Ok(())
    }
}

#[derive(DeriveIden)]
enum DeviceMetrics {
    Table,
    Id,
    Timestamp,
    UserAgent,
    Language,
    Screen,
    Window,
}
