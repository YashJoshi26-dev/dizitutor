import { defineConfig } from 'vite' // Vite config helper
import react from '@vitejs/plugin-react' // React plugin for Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // enable React support
})
