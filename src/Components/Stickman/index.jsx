import {stickman, container} from './index.module.css'

export default function Stickman({mistakes} = props) {
	const imgUrl = `./assets/game${mistakes}.png`;

	return <div className={container}>
		<img src={imgUrl} className={stickman} alt="Game stickman base" />
	</div>
}