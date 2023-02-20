import { useContext } from 'react'
import classes from './index.module.css'
import Select from '../../Components/Select/'
import BackButton from '../../Components/BackButton'
import SettingsContext from '../../Context/SettingsContext'

const LANGUAGES = ['en', 'es']

export default function Settings() {
  const {
    dictionary,
    language,
    setLanguage,
    enableSound,
    setEnableSound,
    keywordHint,
    setKeywordHint
  } = useContext(SettingsContext)

  return (
    <>
      <BackButton />
      <h1 className='title'>{dictionary.game_settings}</h1>

      <section className={classes.settings}>
        <h4 className={classes.settingsTitle}>{dictionary.game_language}</h4>
        <Select values={LANGUAGES} update={setLanguage} value={language}>
          {dictionary.name}
        </Select>
      </section>

      <section className={classes.settings}>
        <h4 className={classes.settingsTitle}>
          {dictionary.settings_keyword_hint}
        </h4>
        <Select
          values={[true, false]}
          update={setKeywordHint}
          value={keywordHint}
        >
          {keywordHint ? dictionary.game_enabled : dictionary.game_disabled}
        </Select>
      </section>

      <section className={classes.settings}>
        <h4 className={classes.settingsTitle}>{dictionary.game_sound}</h4>
        <Select
          values={[true, false]}
          update={setEnableSound}
          value={enableSound}
        >
          {enableSound ? dictionary.game_enabled : dictionary.game_disabled}
        </Select>
      </section>
    </>
  )
}
