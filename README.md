<h1 align="center">bio.kowkodivka</h1>

<p align="center">
    Personal website showcasing information about me
</p>

<p align="center">
    <a href="https://bio.kowkodivka.icu">
        https://bio.kowkodivka.icu
    </a>
</p>

---

## Overview

This is my personal website, presenting details about my work and projects. The frontend is built
with [Solid.js](https://www.solidjs.com/), while the backend is developed in [Rust](https://www.rust-lang.org/).

## Setup

Make sure the following tools are installed:

- [Deno](https://deno.com/) (v1.40+ recommended)
- [Rust](https://www.rust-lang.org/) (latest stable via [rustup](https://rustup.rs/))
- [Docker](https://www.docker.com/) (optional)

### Frontend

The frontend is served as static files.

Run the frontend in development mode with live reloading:

```bash
deno task dev
```

This launches a local development server with automatic reload on changes.

To compile the frontend into static assets:

```bash
deno task build
```

The compiled files will be placed in the `dist/` directory and can be served by any static web server.

### Backend

The backend is an HTTP API implemented in Rust.

To build the Docker image and run the backend container:

```bash
docker build -t "bio.kowkodivka-backend" .
docker run -p 10900:10900 bio.kowkodivka-backend
```

Alternatively, run directly with Cargo in development mode:

```bash
cargo run
```

Or compile in release mode for optimized performance:

```bash
cargo build --release
./target/release/bio.kowkodivka-backend
```

<p align="center">
    🤍💙🤍
</p>