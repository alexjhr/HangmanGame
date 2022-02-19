import { useContext } from 'react'
import { settings } from './index.module.css'
import Select from '../Select/'
import LanguageContext from '../../Context/LanguageContext'

const LANGUAGES = ['en', 'es']

export default function Settings() {
	const { language, dictionary, setUserLanguage } = useContext(LanguageContext);

	return <section className={settings}>
		<h1 className='title'>{dictionary.game_settings}</h1>
		<Select values={LANGUAGES} update={setUserLanguage} value={language}>{dictionary.name}</Select>
	</section>
}