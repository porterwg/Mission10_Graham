import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// I've configured things here so that our site always runs on port 3000
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
