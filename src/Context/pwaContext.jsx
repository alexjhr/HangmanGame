import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRegisterSW } from 'virtual:pwa-register/react'
import Context from './SettingsContext'

const pwaContext = React.createContext({})
const intervalMS = 60 * 60 * 1000

PwaContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export function PwaContextProvider({ children }) {
  const onRegisteredSW = (swUrl, r) => {
    // Called first render (register sw)
    console.log('onregistersw', r)

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

  const {
    offlineReady: [offlineReady, setOfflineReady]
  } = useRegisterSW({ onRegisteredSW, onRegisterError })

  const [notification, setNotification] = useState(Notification.permission)
  const [isWaiting, setWaiting] = useState(false)

  useEffect(() => {
    if (notification === 'default') {
      ;(async () => {
        setWaiting(true)

        const result = await Notification.requestPermission()
        setNotification(result)
      })()
    } else setWaiting(false)
  }, [notification])

  const { dictionary, localVersion, setLocalVersion, jsonVersion } =
    useContext(Context)

  if (localVersion !== jsonVersion) {
    console.log(`version updated ${localVersion} to ${jsonVersion}`)
    setLocalVersion(jsonVersion)

    if (notification === 'granted') {
      // eslint-disable-next-line no-new
      new Notification(dictionary.pwa_updated.replace('$version', jsonVersion))
    }
  }

  const provider = {
    isWaiting,
    offlineReady,
    setOfflineReady
  }

  return <pwaContext.Provider value={provider}>{children}</pwaContext.Provider>
}

export default pwaContext
