import { useLocation } from 'wouter'
import { useContext } from 'react'
import Button from '../../Components/Button'
import classes from './index.module.css'
import SettingsContext from '../../Context/SettingsContext'
import BackButton from '../../Components/BackButton'

export default function Categories() {
  const [, setLocation] = useLocation()
  const { dictionary, setCategory } = useContext(SettingsContext)

  const CategoryButtons = () => {
    return Object.keys(dictionary.categories).map((category, i) => {
      const onPressCategory = () => {
        setCategory(category)
        setLocation('/game')
      }

      return (
        <Button
          key={'categorybtn' + i}
          onPress={onPressCategory}
          description={dictionary.categories[category].description}
        >
          {dictionary.categories[category].name}
        </Button>
      )
    })
  }

  return (
    <>
      <BackButton />

      <div className={classes.container}>
        <h1 className={classes.title}>{dictionary.categories_title}</h1>

        <div className={classes.buttons}>
          <CategoryButtons />
        </div>
      </div>
    </>
  )
}
