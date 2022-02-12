import classes from './index.module.css'

export default function Dialog({title, children, buttons} = props) {
	return <div className={classes.container}>
		<div className={classes.dialog}>
			<h1 className={classes.dialog_title}>{title}</h1> 
			<p className={classes.dialog_description}>{children}</p>

			<div className={classes.dialog_buttons}>
				{ buttons.map(btn => 
					<button className={classes.dialog_button} onClick={btn[1]}>{btn[0]}</button>
				)}
			</div>
		</div>
	</div>
}