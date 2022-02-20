import { useContext} from 'react'
import SettingsContext from '../../Context/SettingsContext'
import classes from './index.module.css'

import useSound from 'use-sound'
import buttonSfx from '../../Sounds/sfx_button.wav'

export default function Button({children, onPress, buttons = []} = props) {
	const [play] = useSound(buttonSfx)
	const { enableSound } = useContext(SettingsContext)

	const onClick = (callback) => {
		if(enableSound) {
			play()	
		}
		return callback()
	}

	if(children) {
		return <button key={children} className={classes.button} onClick={() => onClick(onPress)}>{children}</button>
	}

	return <div className={classes.buttons}>
		{ buttons.map(btn => 
			<button key={btn[0]} className={classes.button} onClick={() => onClick(btn[1])}>{btn[0]}</button>
		)}
	</div>
}