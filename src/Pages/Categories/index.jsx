import { useLocation } from 'wouter'
import { useContext } from 'react'
import Button from '../../Components/Button'
import classes from './index.module.css'
import SettingsContext from '../../Context/SettingsContext'
import BackButton from '../../Components/BackButton'

export default function Categories() {
	const [_, setLocation] = useLocation();
	const { dictionary, setCategory } = useContext(SettingsContext);

	const buttons = Object.keys(dictionary.words).map((category) => {
		return [dictionary['words_category_' + category], () => {
			setCategory(category);
			setLocation('/game');
		}];
	});

	return <>
		<BackButton />

		<div className={classes.container}>
			<h1 className={classes.title}>{dictionary.words_categories}</h1>
		
			<Button key='categorybtn' buttons={buttons}/>
		</div>
	</>
}