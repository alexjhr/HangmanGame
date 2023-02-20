import { useContext } from 'react'
import SettingsContext from '../../Context/SettingsContext'
import classes from './index.module.css'
import { isSelected } from '../Select'

import useSound from 'use-sound'
import buttonSfx from '../../Sounds/sfx_button.wav'
import PropTypes from 'prop-types'

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  buttons: PropTypes.array.isRequired
}

export default function Button({ children, onPress, buttons }) {
  const [play] = useSound(buttonSfx)
  const { enableSound } = useContext(SettingsContext)

  const onClick = (callback) => {
    if (isSelected(enableSound)) play()

    return callback()
  }

  if (children) {
    return (
      <button
        key={children}
        className={classes.button}
        onClick={() => onClick(onPress)}
      >
        {children}
      </button>
    )
  }

  return (
    <div className={classes.buttons}>
      {buttons.map((btn) => (
        <button
          key={btn[0]}
          className={classes.button}
          onClick={() => onClick(btn[1])}
        >
          {btn[0]}
        </button>
      ))}
    </div>
  )
}
