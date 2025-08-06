import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Base path para GitHub Pages (coincide con el nombre del repo)
  base: '/MoroccanOcean/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Aumenta el límite de advertencia a 1000 kB
    chunkSizeWarningLimit: 1000,
  },
});
