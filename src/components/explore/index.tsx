import { ExploreList } from "./explore-list";
import Card from "../card";
import styles from "./explore.module.scss";

const Explore = () => {
	return (
		<div className={styles.container}>
			{ExploreList.map((song) => (
				<Card key={song.id} song={song} />
			))}
		</div>
	);
};

export default Explore;
