import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // <-- вот тут магия
    host: true // важно для Render
  }
});
