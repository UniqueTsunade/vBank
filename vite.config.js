import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Set output directory to 'docs'
    assetsDir: '', // Set assets directory to root
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (name.endsWith('.js')) {
            return '[name].[ext]'; // Keep JS files in the root of docs
          } else if (name.endsWith('.css')) {
            return '[name].[ext]'; // Keep CSS files in the root of docs
          } else {
            return 'assets/[name].[ext]'; // Move other assets to assets
          }
        },
      },
    },
    publicPath: './', // Set public path to current directory (adds dot at the beginning)
  },
  base: './', // Set base URL to current directory (adds dot at the beginning)
});

