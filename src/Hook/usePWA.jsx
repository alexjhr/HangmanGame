import { useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

const intervalMS = 60 * 60 * 1000

export default function usePWA() {
  const [SW, setSW] = useState(null)

  const onRegisteredSW = (swUrl, r) => {
    // Called first r&ender (register sw)
    setSW(r)
    console.log('onRegisteredSW', r)

    setInterval(async () => {
      if (!window.matchMedia('(display-mode: standalone)').matches) return
      if ('connection' in navigator && !navigator.onLine) return

      const resp = await fetch(swUrl, {
        cache: 'no-store',
        headers: {
          cache: 'no-store',
          'cache-control': 'no-cache'
        }
      })
      if (resp?.status === 200) await r.update()
    }, intervalMS)
  }

  const onRegisterError = (err) => {
    console.log('SW registration error', err)
  }

  const { offlineReady } = useRegisterSW({ onRegisteredSW, onRegisterError })
  return { offlineReady, serviceWorker: SW }
}
