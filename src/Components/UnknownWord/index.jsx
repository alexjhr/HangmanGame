import classes from './index.module.css'

export default function UnknownWord({keyword = '', input} = props) {
	const keywordCodified = keyword.split('').map((letter, index) => {
		const inKeyword = input.indexOf(letter) !== -1;
		const unknownLetter = inKeyword ? letter : '';

		return <div key={index} className={classes.letter} data-letter={unknownLetter} data-actived={inKeyword}>_</div>
	})

	return <section className={classes.container}>
		{keywordCodified}
	</section>
}