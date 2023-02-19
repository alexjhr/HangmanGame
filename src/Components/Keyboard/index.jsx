import classes from './index.module.css'
import PropTypes from 'prop-types'

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

Keyboard.propTypes = {
  text: PropTypes.string.isRequired,
  onPressKey: PropTypes.func.isRequired,
  oneUse: PropTypes.bool
}

export default function Keyboard({ text, onPressKey, oneUse = false }) {
  const buttons = letters.map((letter) => {
    const pressed = oneUse ? text.indexOf(letter) !== -1 : false

    return (
      <button
        className={classes.button}
        disabled={pressed}
        key={'keyboard_' + letter}
        onClick={() => onPressKey(letter)}
      >
        {letter}
      </button>
    )
  })

  return <div className={classes.keyboard}>{buttons}</div>
}
