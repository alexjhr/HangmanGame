import classes from './index.module.css'

export default function UnknownWord({keyword, input} = props) {
	const keywordCodified = keyword.split('').map((letter) => {
		const inKeyword = input.indexOf(letter) !== -1;
		const unknownLetter = inKeyword ? letter : '';

		return <div className={classes.letter} data-decodified={unknownLetter} data-actived={inKeyword}>_</div>
	});

	return <section class={classes.container}>
		{keywordCodified}
	</section>
}