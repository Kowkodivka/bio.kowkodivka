FROM rust:latest AS builder

WORKDIR /app

COPY Cargo.toml Cargo.lock ./
COPY ./migration ./migration
COPY ./src ./src

RUN cargo fetch
RUN cargo build --release

FROM debian:bookworm-slim

WORKDIR /app

COPY --from=builder /app/target/release/backend ./backend

RUN apt-get update && apt-get install -y libsqlite3-0 ca-certificates && rm -rf /var/lib/apt/lists/*

CMD ["./backend"]
