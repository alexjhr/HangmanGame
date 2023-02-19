import classes from './index.module.css'
import PropTypes from 'prop-types'

UnknownWord.propTypes = {
  keyword: PropTypes.string,
  input: PropTypes.string
}

export default function UnknownWord({ keyword = '', input }) {
  const keywordCodified = keyword.split('').map((letter, index) => {
    const inKeyword = input.indexOf(letter) !== -1
    const unknownLetter = inKeyword ? letter : ''

    if (letter === ' ') {
      return (
        <div key={index} className={classes.spacing}>
          _
        </div>
      )
    }
    return (
      <div
        key={index}
        className={classes.letter}
        data-letter={unknownLetter}
        data-actived={inKeyword}
      >
        _
      </div>
    )
  })

  return <section className={classes.container}>{keywordCodified}</section>
}
