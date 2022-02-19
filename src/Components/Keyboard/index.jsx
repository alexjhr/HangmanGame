import {classes} from './index.module.css'

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

export default function Keyboard({text, onPressKey, oneUse = false} = props) {
	const buttons = letters.map((letter) => {
		const pressed = oneUse ? text.indexOf(letter) !== -1 : false;

		return <button 
			className={classes.button}
			disabled={pressed}
			key={'keyboard_'+letter}
			onClick={() => onPressKey(letter)}
		>{letter}</button>
	})

	return <div className={classes.keyboard}>
		{buttons}
	</div>
}