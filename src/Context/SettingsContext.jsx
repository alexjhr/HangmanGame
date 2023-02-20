import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext({})

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export function SettingsContextProvider({ children }) {
  let savedSettings = JSON.parse(window.localStorage.getItem('hangman'))

  const [category, setCategory] = useState(savedSettings?.lastCategory || '')
  const [enableSound, setEnableSound] = useState(
    savedSettings?.enableSound || true
  )
  const [keywordHint, setKeywordHint] = useState(
    savedSettings?.keywordHint || true
  )
  const [language, setLanguage] = useState(savedSettings?.language || 'en')
  const [dictionary, setDictionary] = useState(false)

  const fetchDictionaryData = async () => {
    const data = await fetch(`./lang/${language}.json`)

    setDictionary(await data.json())
  }

  useEffect(() => {
    if (!dictionary) fetchDictionaryData()
    else {
      if (savedSettings?.language !== language) fetchDictionaryData()

      savedSettings = {
        language,
        enableSound,
        keywordHint,
        lastCategory: category
      }
      window.localStorage.setItem('hangman', JSON.stringify(savedSettings))
    }
  }, [language, enableSound, category, keywordHint])

  const provider = {
    category,
    language,
    dictionary,
    enableSound,
    keywordHint,

    setKeywordHint,
    setLanguage,
    setCategory,
    setEnableSound
  }

  if (!dictionary) {
    return ''
  }

  return <Context.Provider value={provider}>{children}</Context.Provider>
}

export default Context
