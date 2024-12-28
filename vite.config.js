import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "modvise",
    project: "javascript-react"
  })],

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },

  build: {
    sourcemap: true
  }
});