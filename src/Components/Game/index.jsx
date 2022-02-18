import { useState, useEffect } from 'react'
import StickMan from '../Stickman'
import Keyboard from '../Keyboard'
import UnknownWord from '../UnknownWord'
import Dialog from '../Dialog'

const words = [
	'perro',
	'gato',
	'murcielago',
	'futbol',
	'venezuela',
];

export default function Game() {
	const [keyword, setKeyword] = useState(words[Math.floor(Math.random() * words.length)])
	const [mistakes, setMistake] = useState(0)
	const [text, setText] = useState('')
	const [winner, setWinner] = useState(false)

	const onKeyboard = (key) => {
		if(keyword.indexOf(key) == -1) {
			setMistake((m) => m + 1)
		}
		setText((t) => t + key)
	}

	const onRestartGame = () => {
		setText('')
		setMistake(0)
		setWinner(false)

		setKeyword(words[Math.floor(Math.random() * words.length)])
	}

	//
	useEffect(() => {
		if(text == '') return;

		const knowWord = keyword.split('').map(l => (text.indexOf(l) !== -1 ? l : '_')).join('');
		if(keyword == knowWord) setWinner(true)
	}, [text])

	// Show message box "you lost"?
	const isLoser = mistakes >= 6;

	const loserDialog = [
		["Reiniciar", onRestartGame]
	]

	const winnerDialog = [
		["Nuevo juego", onRestartGame]
	]

	return <>
		<StickMan mistakes={mistakes}></StickMan>

		<UnknownWord keyword={keyword} input={text} />
		<Keyboard oneUse={true} text={text} onPressKey={onKeyboard}/>

		{isLoser &&
			<Dialog title="Perdiste!" buttons={loserDialog}>La palabra era "{keyword}"</Dialog>
		}

		{winner &&
			<Dialog title="Ganaste!" buttons={winnerDialog}>¡Descubriste la palabra, felicidades! </Dialog>
		}
	</>
}