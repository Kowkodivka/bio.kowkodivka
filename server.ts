const ALLOWED_ORIGIN = "https://bio.kowkodivka.icu";

import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("./data/metrics.db");
db.execute(`
CREATE TABLE IF NOT EXISTS metrics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT,
  ip TEXT,
  user_agent TEXT,
  language TEXT,
  languages TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  screen_avail_width INTEGER,
  screen_avail_height INTEGER,
  screen_color_depth INTEGER,
  screen_pixel_depth INTEGER,
  screen_orientation TEXT,
  window_inner_width INTEGER,
  window_inner_height INTEGER,
  device_pixel_ratio REAL
);
`);

Deno.serve({ port: 10900 }, async (req) => {
  const url = new URL(req.url);

  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (url.pathname === "/api/device-metrics" && req.method === "POST") {
    const origin = req.headers.get("origin");
    if (origin !== ALLOWED_ORIGIN) {
      return new Response("forbidden", { status: 403 });
    }

    const ip = req.headers.get("x-real-ip") ||
      req.headers.get("x-forwarded-for") ||
      "unknown";

    let payload: any;
    try {
      payload = await req.json();
    } catch {
      return new Response("invalid json", { status: 400 });
    }

    db.query(
      `INSERT INTO metrics (
      timestamp, ip, user_agent, language, languages,
      screen_width, screen_height, screen_avail_width, screen_avail_height,
      screen_color_depth, screen_pixel_depth, screen_orientation,
      window_inner_width, window_inner_height, device_pixel_ratio
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        payload.timestamp,
        ip,
        payload.userAgent ?? null,
        payload.language ?? null,
        JSON.stringify(payload.languages ?? []),
        payload.screen?.width ?? null,
        payload.screen?.height ?? null,
        payload.screen?.availWidth ?? null,
        payload.screen?.availHeight ?? null,
        payload.screen?.colorDepth ?? null,
        payload.screen?.pixelDepth ?? null,
        payload.screen?.orientation ?? null,
        payload.window?.innerWidth ?? null,
        payload.window?.innerHeight ?? null,
        payload.window?.devicePixelRatio ?? null,
      ],
    );

    return new Response("ok", {
      headers: { "Access-Control-Allow-Origin": ALLOWED_ORIGIN },
    });
  }

  return new Response("not found", { status: 404 });
});
