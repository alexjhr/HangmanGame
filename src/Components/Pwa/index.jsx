import { useContext } from 'react'
import pwaContext from '../../Context/pwaContext'
import Context from '../../Context/SettingsContext'
import Button from '../Button'
import Dialog from '../Dialog'
import Toast from '../Toast'

export default function Pwa() {
  const { isWaiting, offlineReady, setOfflineReady } = useContext(pwaContext)
  const { dictionary } = useContext(Context)

  return (
    <>
      {isWaiting && (
        <Dialog title={dictionary.pwa_alert_updates_t}>
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
    </>
  )
}
