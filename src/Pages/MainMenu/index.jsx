import { useLocation } from 'wouter'
import { useContext } from 'react'
import Button from '../../Components/Button'
import classes from './index.module.css'
import SettingsContext from '../../Context/SettingsContext'

export default function MainMenu() {
	const [_, setLocation] = useLocation();
	const { dictionary } = useContext(SettingsContext);

	const onPressPlay = () => {
		setLocation('/select-category')
	}
	const onPressSettings = () => {
		setLocation('/settings')
	}
	const onPressHelp = () => {

	}
	const onPressAbout = () => {

	}

	const buttons = [
		[
			[dictionary.game_play, onPressPlay]
		],
		[
			[dictionary.game_settings, onPressSettings]
		],
		[
			[dictionary.game_help, onPressHelp],
			[dictionary.game_about, onPressAbout]
		]
	]

	return <div className={classes.container}>
		<h1 className={classes.title}>{dictionary.game_title}</h1>
		
		{buttons.map((button, i) => 
			<Button key={'mainbutton' + i} buttons={button}/>
		)}
	</div>
}