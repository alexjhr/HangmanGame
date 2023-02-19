import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'wouter'
import Game from './Pages/Game'
import MainMenu from './Pages/MainMenu'
import Settings from './Pages/Settings'
import Categories from './Pages/Categories'
import useHashLocation from './Hook/useHashLocation'

import { SettingsContextProvider } from './Context/SettingsContext'
import Help from './Pages/Help'

ReactDOM.render(
	<React.StrictMode>
		<Router hook={useHashLocation}>
			<SettingsContextProvider>
				<div className='container'>
					<Route path="/" component={MainMenu} />
					<Route path="/game" component={Game} />
					<Route path="/settings" component={Settings} />
					<Route path="/help" component={Help} />
					<Route path="/select-category" component={Categories} />
				</div>
			</SettingsContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
