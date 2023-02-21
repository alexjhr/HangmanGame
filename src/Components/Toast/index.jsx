import classes from './index.module.css'
import PropTypes from 'prop-types'

Toast.propTypes = {
  children: PropTypes.node
}

export default function Toast({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.toast}>{children}</div>
    </div>
  )
}
