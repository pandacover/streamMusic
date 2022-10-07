import styles from "./play.module.scss";
import { AudioContext } from "../../lib";
import { useContext } from "react";

const Play = () => {
	const {
		currentSong: { artist, title, source },
	} = useContext(AudioContext);
	return (
		<div className={styles.container}>
			<audio src={source} controls autoPlay />
			<div>
				{artist} - {title}
			</div>
		</div>
	);
};

export default Play;
