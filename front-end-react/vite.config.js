import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:true, //show network for run localhost on mobile phone
    hmr: {
      overlay: false,
    },
  },
});
