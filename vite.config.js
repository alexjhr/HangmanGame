import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA({ 
    registerType: 'autoUpdate',
    base: './',
    manifest: {
      display: "standalone",
      name: "Hanged Game",
      short_name: "Hanged Game",
      description: "Hanged Game",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
  })]
})
