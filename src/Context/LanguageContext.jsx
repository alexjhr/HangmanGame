import React, {useEffect, useState} from 'react'

const Context = React.createContext({})

export function LanguageContextProvider ({children}) {
	const defaultLanguage = window.localStorage.getItem('hangman-lang')

	const [dictionary, setDictionary] = useState({})
	const [language, setLanguage] = useState(defaultLanguage || 'en')
	const [loaded, setLoaded] = useState(false)

	useEffect(function() {
		fetch(`./lang/${language}.json`)
		.then((res) => res.json())
		.then((data) => setDictionary(data))
	}, [language])

	useEffect(function() {
		if(dictionary.name !== undefined) setLoaded(true)
	}, [dictionary])

	const provider = {
		language,
		dictionary: dictionary,

		setUserLanguage: selected => {
		  setLanguage(selected)
		  window.localStorage.setItem('hangman-lang', selected)
		}
	}
	return <Context.Provider value={provider}>
		{loaded ? children : ''}
	</Context.Provider>
}

export default Context