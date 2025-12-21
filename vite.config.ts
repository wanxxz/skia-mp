import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const extensions = ['.web.tsx', '.tsx', '.web.ts', '.ts', '.web.jsx', '.jsx', '.web.js', '.js', '.css', '.json']

export default defineConfig(({ mode }) => ({
  plugins: [viteReact()],
  define: {
    global: mode === 'production' ? 'globalThis' : 'self',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions
    }
  },
  resolve: {
    extensions: extensions,
    alias:
      mode === 'production'
        ? {
            'react-native': 'react-native-web'
          }
        : undefined
  },
  build:
    mode === 'production'
      ? {
          lib: {
            entry: ['./src/mp/index.ts'],
            formats: ['cjs'],
            fileName: () => `libs/app.js`
          }
        }
      : {}
}))
