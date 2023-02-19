import { stickman, container } from './index.module.css'
import PropTypes from 'prop-types'

Stickman.propTypes = {
  mistakes: PropTypes.number
}

export default function Stickman({ mistakes }) {
  const imgUrl = `./assets/game${mistakes}.png`

  return (
    <div className={container}>
      <img src={imgUrl} className={stickman} alt='Game stickman base' />
    </div>
  )
}
