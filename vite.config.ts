import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5001,
  },
  build: {
    outDir: 'dist',
  },
  publicDir: 'src/assets/imgs',
  plugins: [react()],
  base: '/Games/',
});
