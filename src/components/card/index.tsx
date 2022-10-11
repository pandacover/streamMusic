import styles from "./card.module.scss";
import { PlayBtn } from "./play-btn";
import { AddBtn } from "./add-btn";
import { Image } from "../../lib";
import FallbackImage from "/track-fallback.jpg";

type PropsType = {
	song: {
		id: string;
		title: string;
		artist: string;
		source: string;
		image: string;
	};
};
const Card = ({ song: { id, title, artist, source, image } }: PropsType) => {
	return (
		<article className={styles.container}>
			<section className={styles.contentContainer}>
				<div className={styles.details}>
					<p className={styles.title}>{title}</p>
					<p className={styles.artist}>{artist}</p>
				</div>
				<div className={styles.btnContainer}>
					<PlayBtn song={{ title, artist, source, image }} />
					<AddBtn song={{ id, title, artist, image, source }} />
				</div>
			</section>
			<section className={styles.imageContainer}>
				<Image src={image} alt='' fallback={FallbackImage} />
			</section>
		</article>
	);
};

export default Card;
