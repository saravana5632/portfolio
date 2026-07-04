import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // Must match your GitHub repository name exactly
  const REPO_NAME = '/test';

  return {
    plugins: [react(), tailwindcss()],

    // Use '/' as base in AI Studio
   base: '/test/',
  
    define: {
      // NOTE: This key is visible in your built JS bundle.
      // For public demos this is acceptable; never put server-side secrets here.
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
  
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
