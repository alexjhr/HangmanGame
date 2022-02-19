import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'wouter'
import Game from './Components/Game'
import MainMenu from './Components/MainMenu'
import Settings from './Components/Settings'

import { LanguageContextProvider } from './Context/LanguageContext'

ReactDOM.render(
	<React.StrictMode>
		<LanguageContextProvider>
			<div className='container'>
				<Route path="/" component={MainMenu} />
				<Route path="/game" component={Game} />
				<Route path="/settings" component={Settings} />
			</div>
		</LanguageContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
