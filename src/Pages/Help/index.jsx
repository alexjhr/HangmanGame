import { useContext } from "react";
import classes from "./index.module.css";
import BackButton from "../../Components/BackButton";
import SettingsContext from "../../Context/SettingsContext";
import parse from "html-react-parser";

export default function Help() {
	const { dictionary } = useContext(SettingsContext);

	return (
		<>
			<BackButton />

			<div className={classes.info}>
				{parse(dictionary.game_help_info)}
			</div>
		</>
	);
}
