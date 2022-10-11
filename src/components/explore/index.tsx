import Card from "../card";
import styles from "./explore.module.scss";
import { ExploreList } from "./explore-list";
import FallbackImage from "/track-fallback.jpg";
import React, { useContext, useState, useEffect } from "react";
import { Image, AudioContext, SearchContext } from "../../lib";

const Explore = () => {
	const { currentSong } = useContext(AudioContext);
	const { searchParams } = useContext(SearchContext);

	const [currentImage, setCurrentImage] = useState("");
	const [searchRegex, setSearchRegex] = useState(new RegExp("\\w+"));

	useEffect(() => {
		if (currentSong.image !== currentImage) setCurrentImage(currentSong.image);
		if (searchParams.length > 0)
			setSearchRegex(new RegExp(searchParams.toString(), "i"));
		else setSearchRegex(new RegExp("\\w+"));
	}, [currentSong, searchParams]);

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src={currentImage} alt='' fallback={FallbackImage} />
			</div>
			<div className={styles.exploreContainer}>
				{ExploreList.map((song) => (
					<React.Fragment key={song.id}>
						{(song.title.match(searchRegex) ||
							song.artist.match(searchRegex)) && <Card song={song} />}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Explore;
