import classes from './index.module.css'
import Button from '../Button'
import PropTypes from 'prop-types'

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttons: PropTypes.array
}

export default function Dialog({ title, children, buttons }) {
  return (
    <div className={classes.container}>
      <div className={classes.dialog}>
        <h1 className={classes.dialog_title}>{title}</h1>
        <p className={classes.dialog_description}>{children}</p>

        <Button buttons={buttons}></Button>
      </div>
    </div>
  )
}
