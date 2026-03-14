use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(DeviceMetrics::Table)
                    .add_column(
                        string(DeviceMetrics::Ip)
                            .not_null()
                            .default("unknown"),
                    )
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(DeviceMetrics::Table)
                    .drop_column(DeviceMetrics::Ip)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }
}

#[allow(unused)]
#[derive(DeriveIden)]
enum DeviceMetrics {
    Table,
    Id,
    Ip,
    Timestamp,
    UserAgent,
    Language,
    Screen,
    Window,
}
