import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import packageJson from '../../package.json'

// Load languages
import EN from '../Languages/en.json'
import ES from '../Languages/es.json'

const LANGUAGES = { en: EN, es: ES }

const Context = React.createContext({})

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export function SettingsContextProvider({ children }) {
  let savedSettings = JSON.parse(window.localStorage.getItem('hangman'))

  const [category, setCategory] = useState(savedSettings?.lastCategory || '')
  const [enableSound, setEnableSound] = useState(
    savedSettings?.enableSound || 'enabled'
  )
  const [keywordHint, setKeywordHint] = useState(
    savedSettings?.keywordHint || 'enabled'
  )
  const [language, setLanguage] = useState(savedSettings?.language || 'en')
  const [dictionary, setDictionary] = useState(LANGUAGES[language])
  const [localVersion, setLocalVersion] = useState(
    savedSettings?.lastVersion || packageJson.version
  )

  useEffect(() => {
    if (savedSettings?.language !== language) {
      setDictionary(LANGUAGES[language])
    }
    savedSettings = {
      lastVersion: localVersion,
      language,
      enableSound,
      keywordHint,
      lastCategory: category
    }
    window.localStorage.setItem('hangman', JSON.stringify(savedSettings))
  }, [language, enableSound, category, keywordHint, localVersion])

  const provider = {
    localVersion,
    jsonVersion: packageJson.version,
    LANGUAGES,
    category,
    language,
    dictionary,
    enableSound,
    keywordHint,

    setKeywordHint,
    setLanguage,
    setCategory,
    setEnableSound,
    setLocalVersion
  }

  if (!dictionary) {
    return ''
  }

  return <Context.Provider value={provider}>{children}</Context.Provider>
}

export default Context
