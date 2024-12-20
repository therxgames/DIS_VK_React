import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ babel: { plugins: ['typewind/babel'] } }),   svgr({
    svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
     include: "**/*.svg",
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@hooks": path.resolve(__dirname, "src/assets/hooks"),
    },
  },
});
