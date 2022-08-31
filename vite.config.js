import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
import svgPlugin from 'vite-plugin-fast-react-svg'

export default defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteAliases({
      depth: 3,
      adjustDuplicates: true,
      useIndexes: true,
    }),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
    ]),
    viteCompression({
      algorithm: 'brotliCompress',
    }),
    viteImagemin({
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
    }),
    svgPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
    modules: {
      generateScopedName: '[folder]_[local]__[hash:base64:5]',
    },
  },
})
