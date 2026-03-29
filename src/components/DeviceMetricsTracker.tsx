import { Component, onMount } from "solid-js";

async function sendDeviceInfo() {
  const payload = {
    timestamp: new Date().toISOString(),
    user_agent: navigator.userAgent,
    language: navigator.language,
    screen: {
      width: window.screen.width,
      height: window.screen.height,
      avail_width: window.screen.availWidth,
      avail_height: window.screen.availHeight,
      color_depth: window.screen.colorDepth,
      pixel_depth: window.screen.pixelDepth,
      orientation: screen.orientation.type,
    },
    window: {
      inner_width: window.innerWidth,
      inner_height: window.innerHeight,
      device_pixel_ratio: window.devicePixelRatio,
    },
  };

  await fetch("/api/device-metrics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    keepalive: true,
  });
}

const DeviceMetricsTracker: Component = () => {
  onMount(async () => {
    const key = "deviceMetricsSent";
    const sent = sessionStorage.getItem(key);

    if (!sent && navigator.doNotTrack !== "1") {
      await sendDeviceInfo();
      sessionStorage.setItem(key, "true");
    }
  });

  return null;
};

export default DeviceMetricsTracker;
