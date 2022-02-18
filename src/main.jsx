import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'wouter'
import Game from './Components/Game'
import MainMenu from './Components/MainMenu'
import Settings from './Components/Settings'

ReactDOM.render(
	<React.StrictMode>
		<div className='container'>
			<Route path="/" component={MainMenu} />
			<Route path="/game">
				<h1 className='title'>The Hanged Game</h1>
				<Game />
			</Route>
			<Route path="/settings">
				<h1 className='title'>Settings</h1>
				<Settings />
			</Route>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
)
