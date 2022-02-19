import { useState, useEffect } from 'react'

const currentLocation = () => {
	return window.location.hash.replace(/^#/, "") || "/";
};
const navigate = (to) => (window.location.hash = to);

export default function useHashLocation() {
	const [loc, setLoc] = useState(currentLocation());

	useEffect(() => {
		const handler = () => setLoc(currentLocation());

		window.addEventListener("hashchange", handler);
		return () => window.removeEventListener("hashchange", handler);
	}, []);
  
	return [loc, navigate];
};