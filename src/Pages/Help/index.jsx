
import { useContext } from 'react'
import classes from './index.module.css'
import BackButton from '../../Components/BackButton'
import SettingsContext from '../../Context/SettingsContext'
import ReactHtmlParser from 'react-html-parser';

export default function Help() {
	const { dictionary } = useContext(SettingsContext);

	return <>
		<BackButton />

		<div className={classes.info}>
			{ReactHtmlParser(dictionary.game_help_info)}
		</div>
   </>
}