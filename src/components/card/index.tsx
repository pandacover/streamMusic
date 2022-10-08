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
			<div className={styles.image}>
				<Image src={image} alt='Cover Image' fallback={FallbackImage} />
			</div>
			<section className={styles.details}>
				<p className={styles.title}>{title}</p>
				<p className={styles.artist}>by {artist}</p>
			</section>
			<div className={styles.btnContainer}>
				<div>
					<PlayBtn song={{ title, artist, source }} />
					<AddBtn song={{ id, title, artist, image, source }} />
				</div>
			</div>
		</article>
	);
};

export default Card;
