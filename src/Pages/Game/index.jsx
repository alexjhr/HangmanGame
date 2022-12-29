import { useState, useEffect, useContext } from 'react'
import useSound from 'use-sound'
import StickMan from '../../Components/Stickman'
import Keyboard from '../../Components/Keyboard'
import UnknownWord from '../../Components/UnknownWord'
import Dialog from '../../Components/Dialog'
import BackButton from '../../Components/BackButton'
import SettingsContext from '../../Context/SettingsContext'

import hangingSfx from '../../Sounds/sfx_hanging.wav'
import gameoverSfx from '../../Sounds/sfx_gameover.wav'
import winSfx from '../../Sounds/sfx_win.mp3'

function random (array) {
	return array[ Math.floor( Math.random() * array.length ) ];
}

export default function Game() {
	const [mistakes, setMistake] = useState(0)
	const [text, setText] = useState('')
	const [winner, setWinner] = useState(false)
	const { dictionary, enableSound } = useContext(SettingsContext)
	const [keyword, setKeyword] = useState(random(dictionary.words))

	const [playHanging, {stop: stopHanging}] = useSound(hangingSfx)
	const [playGameOver, {stop: stopGameOver}] = useSound(gameoverSfx)
	const [playWin, {stop: stopWin}] = useSound(winSfx)

	const onKeyboard = (key) => {
		if(keyword.indexOf(key) == -1) {
			setMistake((m) => m + 1)
		}
		setText((t) => t + key)
	}

	const onRestartGame = () => {
		// Stop audio
		if(enableSound) {
			stopWin()
			stopHanging()
			stopGameOver()	
		}

		// Reset game vars
		setText('')
		setMistake(0)
		setWinner(false)

		// Set other keyword
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
	if(enableSound) {
		if(isLoser) {
			// Play lose sounds
			playHanging()
			playGameOver()
		}
		// Play win sound
		else if(winner) playWin()
	}

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