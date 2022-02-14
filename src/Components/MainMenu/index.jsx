import classes from './index.module.css'
import Button from '../Button'
import { useLocation } from 'wouter';

export default function MainMenu() {
	const [location, setLocation] = useLocation();

	const onPressPlay = () => {
		setLocation('/game')
	}

	const onPressSettings = () => {

	}

	const onPressHelp = () => {

	}

	const onPressAbout = () => {

	}

	const buttons = [
		[
			["Jugar", onPressPlay]
		],
		[
			["Ajustes", onPressSettings]
		],
		[
			["Ayuda", onPressHelp],
			["Acerca de", onPressAbout]
		]
	]

	return <div class={classes.container}>
		<h1 className={classes.title}>The Hanged Game</h1>
		
		{buttons.map(btn => 
			<Button buttons={btn}/>
		)}
	</div>
}