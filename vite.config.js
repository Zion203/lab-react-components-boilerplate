import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
      server: {
        port: 9999,
      },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    assetsInclude: ["**/*.jpg", "**/*.JPG"],
  };
});

