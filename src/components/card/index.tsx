import styles from "./card.module.scss";
import { PlayBtn } from "./play-btn";

type PropsType = {
	song: {
		title: string;
		artist: string;
		source: string;
		image: string;
	};
};
const Card = ({ song: { title, artist, source, image } }: PropsType) => {
	return (
		<article className={styles.container}>
			<div className={styles.image}>
				<img src={image} alt='Cover Image' />
			</div>
			<section className={styles.details}>
				<p className={styles.title}>{title}</p>
				<p className={styles.artist}>by {artist}</p>
			</section>
			<div className={styles.btnContainer}>
				<PlayBtn song={{ title, artist, source }} />
			</div>
		</article>
	);
};

export default Card;
