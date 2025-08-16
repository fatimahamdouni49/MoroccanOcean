
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Ruta base para GitHub Pages
  base: '/MoroccanOcean/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Eleva el límite de aviso de chunks a 1 MB
    chunkSizeWarningLimit: 1000,
  },
});
