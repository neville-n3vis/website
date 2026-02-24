import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      base: '/', 
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Fix: Only stringify the specific keys you need to avoid the security warning
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      },
      resolve: {
        alias: {
          // Fix: Pointing to root '.' because you don't have a /src folder
          '@': path.resolve(__dirname, '.'), 
        }
      },
      build: {
        outDir: 'dist',
        emptyOutDir: true,
      }
    };
});
