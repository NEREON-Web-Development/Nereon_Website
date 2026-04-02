import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages project URL: https://nereon-web-development.github.io/Nereon_Website/
  // Change to base: '/' if a custom domain (e.g. www.nereon.gr) is configured in Pages settings
  base: '/Nereon_Website/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
