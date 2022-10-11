import Card from "../card";
import React, { useContext, useState, useEffect } from "react";
import { PlaylistContext, SearchContext } from "../../lib";
import styles from "./playlist.module.scss";

const Playlist = () => {
	const { playlist } = useContext(PlaylistContext);
	const { searchParams } = useContext(SearchContext);
	const [isPlaylistEmpty, setIsPlaylistEmpty] = useState(false);
	const [searchRegex, setSearchRegex] = useState(new RegExp("\\w+"));

	useEffect(() => {
		setIsPlaylistEmpty(playlist.length <= 0);
		if (searchParams.length > 0)
			setSearchRegex(new RegExp(searchParams.toString(), "i"));
		else setSearchRegex(new RegExp("\\w+"));
	}, [playlist, searchParams]);
	console.log(playlist);
	return (
		<div className={styles.container}>
			{isPlaylistEmpty && (
				<div className={styles.empty}>No songs added to playlist yet.</div>
			)}
			<div className={styles.playlistContainer}>
				{playlist.map((song) => (
					<React.Fragment key={song.id}>
						{(song.title.match(searchRegex) ||
							song.artist.match(searchRegex)) && <Card song={song} />}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Playlist;
