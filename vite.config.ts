import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dizy-ff-website/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});