import { back } from './index.module.css'
import { useLocation } from 'wouter' 
import { useContext} from 'react'
import LanguageContext from '../../Context/LanguageContext'

export default function BackButton() {
	const [_, setLocation] = useLocation();
	const { dictionary } = useContext(LanguageContext)

	const onClickButton = () => {
		setLocation('/')
	}
	return <button className={back} onClick={onClickButton}>{ '< ' + dictionary.game_back }</button>
}