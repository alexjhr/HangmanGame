import { useContext } from 'react'
import SettingsContext from '../../Context/SettingsContext'
import classes from './index.module.css'

import useSound from 'use-sound'
import buttonSfx from '../../Assets/Sounds/sfx_button.wav'
import PropTypes from 'prop-types'

Select.propTypes = {
  value: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  children: PropTypes.node
}

export function isSelected(value) {
  const array = { enabled: true, disabled: false }

  return array[value]
}

export function Select({ value, update, values, children }) {
  const [play] = useSound(buttonSfx)
  const { enableSound } = useContext(SettingsContext)

  const onBack = () => {
    if (isSelected(enableSound)) play()

    const backOption = values[values.indexOf(value) - 1]
    update(backOption !== undefined ? backOption : values[values.length - 1])
  }

  const onNext = () => {
    if (isSelected(enableSound)) play()

    const nextOption = values[values.indexOf(value) + 1]
    update(nextOption !== undefined ? nextOption : values[0])
  }

  return (
    <div className={classes.select}>
      <button className={classes.button} onClick={onBack}>
        {'<'}
      </button>{' '}
      {children}{' '}
      <button className={classes.button} onClick={onNext}>
        {'>'}
      </button>
    </div>
  )
}
