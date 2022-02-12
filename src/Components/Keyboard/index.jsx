import {keyboard, button} from './index.module.css'
import {useState, useEffect} from 'react'

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

export default function Keyboard({text, onPressKey, oneUse = false} = props) {
	const buttons = letters.map((letter) => {
		const pressed = oneUse ? text.indexOf(letter) !== -1 : false;

		return <button 
			className={button}
			disabled={pressed}
			key={letter}
			onClick={() => onPressKey(letter)}
		>{letter}</button>
	})

	return <div className={keyboard}>
		{buttons}
	</div>
}