import React, {useEffect, useState} from 'react'

const Context = React.createContext({})

export function SettingsContextProvider ({children}) {
	const defaultSettings = JSON.parse(window.localStorage.getItem('hangman'));

	const [language, setLanguage] = useState(
		defaultSettings?.language || 'en'
	)
	const [enableSound, setSound] = useState(
		defaultSettings?.enableSound || true
	)
	const [loaded, setLoaded] = useState(false)
	const [dictionary, setDictionary] = useState({})

	const updateSettings = () => {
		const updateJSON = JSON.stringify({
			language,
			enableSound
		})
		window.localStorage.setItem('hangman', updateJSON)
	}

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
		dictionary,
		enableSound,

		setLanguage: selected => {
		  setLanguage(selected), updateSettings()
		},

		setEnableSound: enabled => {
			setSound(enabled), updateSettings()
		}
	}
	return <Context.Provider value={provider}>
		{loaded ? children : ''}
	</Context.Provider>
}

export default Context