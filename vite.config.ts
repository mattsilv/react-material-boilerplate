import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Check if we're in production mode
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProduction ? "/react-material-boilerplate/" : "", // Empty string for dev
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.md"],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "@mui/material",
            "@mui/icons-material",
            "@emotion/react",
            "@emotion/styled",
          ],
          datatable: ["@mui/x-data-grid"],
          map: ["leaflet", "react-leaflet"],
        },
      },
    },
  },
});
