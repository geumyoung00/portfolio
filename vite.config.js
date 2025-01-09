import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import VitePluginInjectPreload from 'vite-plugin-inject-preload';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePluginInjectPreload({
      files: [
        {
          match: /\b\w+\.woff2\b/,
          attributes: {
            rel: 'preload',
            type: 'font/woff2',
            as: 'font',
            crossorigin: 'anonymous',
          },
        },
      ],
      injectTo: 'head-prepend',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@style': path.resolve(__dirname, 'src/style'),
    },
  },
});
