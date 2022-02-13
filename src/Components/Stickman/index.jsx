import {stickman, container} from './index.module.css'

export default function Stickman({mistakes} = props) {
	const imagePath = `./assets/game${mistakes}.png`; 

	return <div className={container}>
		<img src={imagePath} className={stickman} alt="Game stickman base" />
	</div>
}