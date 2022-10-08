import Card from "../card";
import React, { useContext, useState, useEffect } from "react";
import { PlaylistContext } from "../../lib";
import styles from "./playlist.module.scss";

const Playlist = () => {
	const { playlist } = useContext(PlaylistContext);
	const [isPlaylistEmpty, setIsPlaylistEmpty] = useState(false);

	useEffect(() => {
		setIsPlaylistEmpty(playlist.length <= 1);
	}, [playlist]);
	return (
		<div className={styles.container}>
			<div>{isPlaylistEmpty && "No songs added to playlist yet."}</div>
			{playlist.map((song) => (
				<React.Fragment key={song.id}>
					{song.id !== "" && <Card song={song} />}
				</React.Fragment>
			))}
		</div>
	);
};

export default Playlist;
