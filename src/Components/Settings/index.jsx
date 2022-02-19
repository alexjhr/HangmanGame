import { useContext } from 'react'
import classes from './index.module.css'
import Select from '../Select/'
import LanguageContext from '../../Context/LanguageContext'
import BackButton from '../BackButton'

const LANGUAGES = ['en', 'es']

export default function Settings() {
	const { language, dictionary, setUserLanguage } = useContext(LanguageContext);

	return <>
		<BackButton />
		<h1 className='title'>{dictionary.game_settings}</h1>

		<section className={classes.settings}>
			<h4 className={classes.settingsTitle}>{dictionary.game_language}</h4>
			<Select values={LANGUAGES} update={setUserLanguage} value={language}>{dictionary.name}</Select>
		</section>
	</>
}