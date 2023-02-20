import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext({})

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export function SettingsContextProvider({ children }) {
  const savedSettings = JSON.parse(window.localStorage.getItem('hangman'))

  const [category, setCategory] = useState(savedSettings?.lastCategory || '')
  const [enableSound, setEnableSound] = useState(
    savedSettings?.enableSound || true
  )
  const [keywordHint, setKeywordHint] = useState(
    savedSettings?.keywordHint || true
  )
  const [language, setLanguage] = useState(savedSettings?.language || 'en')

  const [dictionary, setDictionary] = useState({})
  const [loaded, setLoaded] = useState(false)

  if (
    savedSettings?.language !== language ||
    savedSettings?.enableSound !== enableSound ||
    savedSettings?.lastCategory !== category ||
    savedSettings?.keywordHint !== keywordHint
  ) {
    const updateJSON = JSON.stringify({
      language,
      enableSound,
      keywordHint,
      lastCategory: category
    })
    window.localStorage.setItem('hangman', updateJSON)
  }

  useEffect(
    function () {
      fetch(`./lang/${language}.json`)
        .then((res) => res.json())
        .then((data) => setDictionary(data))
    },
    [language]
  )

  useEffect(
    function () {
      if (dictionary.name !== undefined) setLoaded(true)
    },
    [dictionary]
  )

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
  return (
    <Context.Provider value={provider}>
      {loaded ? children : ''}
    </Context.Provider>
  )
}

export default Context
