import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'wouter'
import Game from './Components/Game'
import MainMenu from './Components/MainMenu'

ReactDOM.render(
	<React.StrictMode>
		<div className='container'>
			<Route path="/" component={MainMenu} />
			<Route path="/game" component={Game} />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
)
