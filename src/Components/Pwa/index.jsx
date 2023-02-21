import { useContext, useEffect, useState } from 'react'
import Context from '../../Context/SettingsContext'
import Button from '../Button'
import Dialog from '../Dialog'
import Toast from '../Toast'
import PropTypes from 'prop-types'
import usePWA from '../../Hook/usePWA.jsX'

Pwa.propTypes = {
  children: PropTypes.node.isRequired
}
export default function Pwa({ children }) {
  const { dictionary, localVersion, setLocalVersion, jsonVersion } =
    useContext(Context)

  const [notification, setNotification] = useState(Notification.permission)
  const [isWaiting, setWaiting] = useState(false)

  const requestNotification = async () => {
    const result = await Notification.requestPermission()
    setNotification(result)
  }

  useEffect(() => {
    // Check if can send request notification dialog
    if (notification === 'default' && !isWaiting) setWaiting(true)
    else if (isWaiting && notification !== 'default') setWaiting(false)
  }, [notification])

  if (!(localVersion === jsonVersion)) {
    setLocalVersion(jsonVersion)

    if (notification === 'granted') {
      // eslint-disable-next-line no-new
      new Notification(dictionary.pwa_updated.replace('$version', jsonVersion))
    }
  }

  // Obtain PWA
  const [offlineReady, setOfflineReady] = usePWA()

  const dialogBtn = [
    [
      dictionary.close,
      () => {
        setWaiting(false)
        requestNotification()
      }
    ]
  ]
  return (
    <>
      {isWaiting && (
        <Dialog title={dictionary.pwa_alert_updates_t} buttons={dialogBtn}>
          {dictionary.pwa_alert_updates_d}
        </Dialog>
      )}

      {offlineReady && (
        <Toast>
          {dictionary.pwa_is_ready}

          <Button onPress={() => setOfflineReady(false)}>
            {dictionary.close}
          </Button>
        </Toast>
      )}

      {children}
    </>
  )
}
