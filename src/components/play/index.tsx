import styles from "./play.module.scss";
import { AudioContext } from "../../lib";
import { useContext, useState } from "react";

const Play = () => {
	const {
		currentSong: { artist, title, source, isAutoLoop },
		setCurrentSong,
	} = useContext(AudioContext);

	const [isCheckboxTrue, setIsCheckboxTrue] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setIsCheckboxTrue(e.currentTarget.checked);
		setCurrentSong({
			artist,
			title,
			source,
			isAutoLoop: e.currentTarget.checked,
		});
	};
	return (
		<div className={styles.container}>
			<audio src={source} controls autoPlay loop={isAutoLoop} />
			<div>
				<p>
					{artist} - {title}
				</p>
				<div>
					<input
						type='checkbox'
						checked={isCheckboxTrue}
						onChange={(e) => handleChange(e)}
					/>
					AutoLoop
				</div>
			</div>
		</div>
	);
};

export default Play;
