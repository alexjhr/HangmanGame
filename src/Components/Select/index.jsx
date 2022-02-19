import classes from './index.module.css'

export default function Select({value, update, values, children} = props) {
	const onBack = () => {
		const backOption = values[values.indexOf(value) - 1]
		update(backOption !== undefined ? backOption : values[values.length - 1])
	}

	const onNext = () => {
		const nextOption = values[values.indexOf(value) + 1]
		update(nextOption !== undefined ? nextOption : values[0])
	}

	return <div className={classes.select}>
		<button className={classes.button} onClick={onBack}>{'<'}</button> {children} <button className={classes.button} onClick={onNext}>{'>'}</button>
	</div>
}