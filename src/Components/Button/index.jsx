import classes from './index.module.css'

export default function Button({children, onPress, buttons = []} = props) {
	if(children) {
		return <button key={children} className={classes.button} onClick={onPress}>{children}</button>
	}
	return <div className={classes.buttons}>
		{ buttons.map(btn => 
			<button key={btn[0]} className={classes.button} onClick={btn[1]}>{btn[0]}</button>
		)}
	</div>
}