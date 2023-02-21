import { useRegisterSW } from 'virtual:pwa-register/react'

const intervalMS = 60 * 60 * 1000

export default function usePWA() {
  const onRegisteredSW = (swUrl, r) => {
    // Called first render (register sw)
    console.log('onRegisteredSW', r)

    r &&
      setInterval(async () => {
        if (!(!r.installing && navigator)) return

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
  return offlineReady
}
