import { stickman, container } from './index.module.css'
import PropTypes from 'prop-types'

import game0 from '../../Assets/Images/game0.png'
import game1 from '../../Assets/Images/game1.png'
import game2 from '../../Assets/Images/game2.png'
import game3 from '../../Assets/Images/game3.png'
import game4 from '../../Assets/Images/game4.png'
import game5 from '../../Assets/Images/game5.png'
import game6 from '../../Assets/Images/game6.png'

Stickman.propTypes = {
  mistakes: PropTypes.number
}

const IMAGE_STICKMAN_MISTAKE = [
  game0,
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
]


export default function Stickman({ mistakes }) {
  const image = IMAGE_STICKMAN_MISTAKE[mistakes];

  return (
    <div className={container}>
      <img src={image} className={stickman} alt='Game stickman base' />
    </div>
  )
}
