import { back } from './index.module.css'
import { useLocation } from 'wouter'
import { useContext } from 'react'
import SettingsContext from '../../Context/SettingsContext'

import useSound from 'use-sound'
import buttonSfx from '../../Sounds/sfx_button.wav'

export default function BackButton() {
  const [, setLocation] = useLocation()
  const [play] = useSound(buttonSfx)
  const { dictionary, enableSound } = useContext(SettingsContext)

  const onClickButton = () => {
    if (enableSound) {
      play()
    }
    setLocation('/')
  }
  return (
    <button className={back} onClick={onClickButton}>
      {'< ' + dictionary.game_back}
    </button>
  )
}
