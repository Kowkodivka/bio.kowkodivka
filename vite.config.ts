import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import solidSvg from "vite-plugin-solid-svg";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    devtools(),
    solidPlugin(),
    tailwindcss(),
    solidSvg({ defaultAsComponent: true }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
