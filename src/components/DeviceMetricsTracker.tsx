import { Component, onMount } from "solid-js";

async function sendDeviceInfo() {
  const payload = {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages,
    screen: {
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
      colorDepth: window.screen.colorDepth,
      pixelDepth: window.screen.pixelDepth,
      orientation: screen.orientation.type,
    },
    window: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
    },
  };

  await fetch("http://127.0.0.1:10900/api/device-metrics", {
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
