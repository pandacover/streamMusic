import { BsPlayFill } from "react-icons/bs";
import styles from "./playbtn.module.scss";
import { useContext } from "react";
import { AudioContext } from "../../../lib";

type PropsType = {
	song: {
		title: string;
		source: string;
		artist: string;
	};
};

export const PlayBtn = ({ song: { title, source, artist } }: PropsType) => {
	const { setCurrentSong } = useContext(AudioContext);

	const handlePlay = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setCurrentSong({ title, source, artist });
	};

	return (
		<button onClick={(e) => handlePlay(e)} className={styles.button}>
			<BsPlayFill />
		</button>
	);
};
