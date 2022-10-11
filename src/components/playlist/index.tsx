import Card from "../card";
import React, { useContext, useState, useEffect } from "react";
import { PlaylistContext } from "../../lib";
import styles from "./playlist.module.scss";

const Playlist = () => {
	const { playlist } = useContext(PlaylistContext);
	const [isPlaylistEmpty, setIsPlaylistEmpty] = useState(false);

	useEffect(() => {
		setIsPlaylistEmpty(playlist.length <= 0);
	}, [playlist]);
	console.log(playlist);
	return (
		<div className={styles.container}>
			{isPlaylistEmpty && (
				<div className={styles.empty}>No songs added to playlist yet.</div>
			)}
			<div className={styles.playlistContainer}>
				{playlist.map((song) => (
					<Card song={song} key={song.id} />
				))}
			</div>
		</div>
	);
};

export default Playlist;
