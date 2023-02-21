import { useContext } from 'react'
import SettingsContext from '../../Context/SettingsContext'
import classes from './index.module.css'
import { isSelected } from '../Select'

import useSound from 'use-sound'
import buttonSfx from '../../Assets/Sounds/sfx_button.wav'
import PropTypes from 'prop-types'

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  buttons: PropTypes.array,
  description: PropTypes.string
}

export default function Button({ children, onPress, buttons, description }) {
  const [play] = useSound(buttonSfx)
  const { enableSound } = useContext(SettingsContext)

  const onClick = (callback) => {
    if (isSelected(enableSound)) play()

    return callback()
  }

  if (children) {
    return (
      <button
        is
        key={children}
        className={classes.button}
        onClick={() => onClick(onPress)}
        description={description}
      >
        {children}
      </button>
    )
  }

  return (
    <div className={classes.buttons}>
      {buttons.map((btn) => (
        <button
          is
          key={btn[0]}
          className={classes.button}
          onClick={() => onClick(btn[1])}
          description={btn[2]}
        >
          {btn[0]}
        </button>
      ))}
    </div>
  )
}
