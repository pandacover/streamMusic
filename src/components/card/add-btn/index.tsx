import {
	MdLibraryAdd as PlaylistIcon,
	MdLibraryAddCheck as PlaylistIconCheck,
} from "react-icons/md";
import styles from "./addbtn.module.scss";
import { PlaylistContext } from "../../../lib";
import { useContext, useState, useEffect } from "react";

type PropsType = {
	song: {
		id: string;
		title: string;
		artist: string;
		image: string;
		source: string;
	};
};

export const AddBtn = ({ song }: PropsType) => {
	const { playlist, setPlaylist } = useContext(PlaylistContext);
	const [existInPlaylist, setExistInPlaylist] = useState(false);

	const addToPlaylist = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setPlaylist([...playlist, song]);
	};

	const removeFromPlaylist = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setPlaylist((prevPlaylist) =>
			prevPlaylist.filter(
				(item) => JSON.stringify(item) !== JSON.stringify(song)
			)
		);
	};

	useEffect(() => {
		let currentSong = JSON.stringify(song);
		for (let index = 0; index < playlist.length; ++index) {
			let currentSongInIteration = JSON.stringify(playlist[index]);
			if (currentSong === currentSongInIteration) {
				setExistInPlaylist(true);
				return;
			}
		}
		setExistInPlaylist(false);
	}, [playlist]);

	return (
		<button
			onClick={(e) => {
				existInPlaylist ? removeFromPlaylist(e) : addToPlaylist(e);
			}}
			className={styles.button}
		>
			{existInPlaylist ? <PlaylistIconCheck /> : <PlaylistIcon />}
		</button>
	);
};
