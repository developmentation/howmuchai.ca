import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Load environment variables manually for vite.config.js
import { config } from 'dotenv';
config({ path: '../server/.env' }); // Load server/.env explicitly

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  envDir: '../server', // Load server/.env for runtime access
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3000', // Use the loaded variable
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
      },
    },
  },
});