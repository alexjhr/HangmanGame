import classes from './index.module.css'
import Button from '../Button'

export default function Dialog({title, children, buttons} = props) {
	return <div className={classes.container}>
		<div className={classes.dialog}>
			<h1 className={classes.dialog_title}>{title}</h1> 
			<p className={classes.dialog_description}>{children}</p>

			<Button buttons={buttons}></Button>
		</div>
	</div>
}