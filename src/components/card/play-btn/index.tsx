import { MdPause as PauseIcon, MdPlayArrow as PlayIcon } from "react-icons/md";
import styles from "./playbtn.module.scss";
import { useContext, useState } from "react";
import { AudioContext } from "../../../lib";
import { CurrentSongInterface } from "../../../lib/audio-context";

type PropsType = {
	song: CurrentSongInterface;
};

export const PlayBtn = ({
	song: { title, source, artist, image },
}: PropsType) => {
	const { currentSong, setCurrentSong } = useContext(AudioContext);

	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setCurrentSong({ title, source, artist, image });
		setIsPlaying(!isPlaying);
	};

	return (
		<button onClick={(e) => handlePlay(e)} className={styles.button}>
			{isPlaying ? <PauseIcon /> : <PlayIcon />}
		</button>
	);
};
