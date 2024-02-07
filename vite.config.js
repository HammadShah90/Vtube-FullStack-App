import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Change the base URL of your backend API
      // Example: If backend API is hosted at https://example.com/api, use:
      // "/api": "https://example.com"
      "/api": {
        target: "https://vtube-v1.cyclic.app", // Backend API ka base URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
});
