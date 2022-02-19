import { useState, useEffect, useContext } from 'react'
import StickMan from '../Stickman'
import Keyboard from '../Keyboard'
import UnknownWord from '../UnknownWord'
import Dialog from '../Dialog'
import BackButton from '../BackButton'
import LanguageContext from '../../Context/LanguageContext'

function random (array) {
	return array[ Math.floor( Math.random() * array.length ) ];
}

export default function Game() {
	const [mistakes, setMistake] = useState(0)
	const [text, setText] = useState('')
	const [winner, setWinner] = useState(false)
	const { dictionary } = useContext(LanguageContext)
	const [keyword, setKeyword] = useState(random(dictionary.words))

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

		setKeyword(random(dictionary.words))
	}

	//
	useEffect(() => {
		if(text === '') return;

		const knowWord = keyword.split('').map(l => (text.indexOf(l) !== -1 ? l : '_')).join('');
		if(keyword == knowWord) setWinner(true)
	}, [text])

	// Show message box "you lost"?
	const isLoser = mistakes >= 6;

	const loserDialog = [
		[dictionary.game_reset, onRestartGame]
	]
	const winnerDialog = [
		[dictionary.new_game, onRestartGame]
	]
	return <>
		<BackButton />
		<h1 className='title'>{dictionary.game_title}</h1>

		<StickMan mistakes={mistakes}></StickMan>

		<UnknownWord keyword={keyword} input={text} />
		<Keyboard oneUse={true} text={text} onPressKey={onKeyboard}/>

		{isLoser &&
			<Dialog title={dictionary.game_lose} buttons={loserDialog}>{dictionary.game_lose_d.replace('{keyword}', keyword)}</Dialog>
		}

		{winner &&
			<Dialog title={dictionary.game_winner} buttons={winnerDialog}>{dictionary.game_winner_d}</Dialog>
		}
	</>
}