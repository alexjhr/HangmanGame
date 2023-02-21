import { useLocation } from 'wouter'
import { useContext } from 'react'
import Button from '../../Components/Button'
import classes from './index.module.css'
import SettingsContext from '../../Context/SettingsContext'
import packageJson from '../../../package.json'
import ReloadPrompt from '../../Components/ReloadPrompt'

export default function MainMenu() {
  const [, setLocation] = useLocation()
  const { dictionary } = useContext(SettingsContext)

  const buttons = [
    [[dictionary.game_play, () => setLocation('/select-category')]],
    [[dictionary.game_settings, () => setLocation('/settings')]],
    [
      [dictionary.game_help, () => setLocation('/help')],
      [dictionary.game_about, () => setLocation('#')]
    ]
  ]

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{dictionary.game_title}</h1>

      {buttons.map((button, i) => (
        <Button key={'mainbutton' + i} buttons={button} />
      ))}

      <ReloadPrompt />

      <div className={classes.version}>
        {dictionary.version + ' ' + packageJson.version}
      </div>
    </div>
  )
}
