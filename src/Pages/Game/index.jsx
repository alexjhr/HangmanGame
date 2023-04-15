import { useState, useEffect, useContext } from 'react'
import useSound from 'use-sound'
import StickMan from '../../Components/Stickman'
import Keyboard from '../../Components/Keyboard'
import UnknownWord from '../../Components/UnknownWord'
import Dialog from '../../Components/Dialog'
import BackButton from '../../Components/BackButton'
import SettingsContext from '../../Context/SettingsContext'
import { isSelected } from '../../Components/Select'

import hangingSfx from '../../Assets/Sounds/sfx_hanging.wav'
import gameoverSfx from '../../Assets/Sounds/sfx_gameover.wav'
import winSfx from '../../Assets/Sounds/sfx_win.mp3'

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}
function cleanKeyword(keyword) {
  return keyword.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function Game() {
  const [mistakes, setMistake] = useState(0)
  const [text, setText] = useState('')
  const [winner, setWinner] = useState(false)
  const { keywordHint, dictionary, category, enableSound } =
    useContext(SettingsContext)

  const [keyword, setKeyword] = useState(
    cleanKeyword(random(dictionary.categories[category].words))
  )

  if (!text && isSelected(keywordHint)) {
    setText(random(keyword.split('')))
  }

  const [playHanging, { stop: stopHanging }] = useSound(hangingSfx)
  const [playGameOver, { stop: stopGameOver }] = useSound(gameoverSfx)
  const [playWin, { stop: stopWin }] = useSound(winSfx)

  const onKeyboard = (key) => {
    if (keyword.indexOf(key) === -1) {
      setMistake((m) => m + 1)
    }
    setText((t) => t + key)
  }

  const onRestartGame = () => {
    // Stop audio
    if (isSelected(enableSound)) {
      stopWin()
      stopHanging()
      stopGameOver()
    }

    // Reset game vars
    setMistake(0)
    setWinner(false)

    const NEW_KEYWORD = cleanKeyword(
      random(dictionary.categories[category].words)
    )
    setKeyword(NEW_KEYWORD)

    if (isSelected(keywordHint)) setText(random(NEW_KEYWORD.split('')))
  }

  //
  useEffect(() => {
    if (text === '') return

    const knowWord = keyword
      .split('')
      .map((l) => {
        if (text.indexOf(l) !== -1) return l

        return l === ' ' ? ' ' : '_'
      })
      .join('')
    if (keyword === knowWord) setWinner(true)
  }, [text])

  // Show message box "you lost"?
  const isLoser = mistakes >= 6
  if (isSelected(enableSound)) {
    if (isLoser) {
      // Play lose sounds
      playHanging()
      playGameOver()
    }
    // Play win sound
    else if (winner) playWin()
  }

  const loserDialog = [[dictionary.game_reset, onRestartGame]]
  const winnerDialog = [[dictionary.new_game, onRestartGame]]
  return (
    <>
      <BackButton />
      <h1 className='title'>{dictionary.game_title}</h1>

      <StickMan mistakes={mistakes}></StickMan>

      <UnknownWord keyword={keyword} input={text} />
      <Keyboard oneUse={true} text={text} onPressKey={onKeyboard} />

      {isLoser && (
        <Dialog title={dictionary.game_lose} buttons={loserDialog}>
          {dictionary.game_lose_d.replace('{keyword}', keyword)}
        </Dialog>
      )}

      {winner && (
        <Dialog title={dictionary.game_winner} buttons={winnerDialog}>
          {dictionary.game_winner_d}
        </Dialog>
      )}
    </>
  )
}
