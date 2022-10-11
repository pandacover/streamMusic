import styles from "./play.module.scss";
import { AudioContext } from "../../lib";
import { useContext, useState } from "react";
import { ImLoop } from "react-icons/im";
import Audio from "./audio";

const Play = () => {
	const {
		currentSong: { artist, title, source, isAutoLoop },
		setCurrentSong,
	} = useContext(AudioContext);

	const [isCheckboxTrue, setIsCheckboxTrue] = useState(false);

	const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsCheckboxTrue(!isCheckboxTrue);
		setCurrentSong({
			artist: "",
			title: "",
			source: "",
			image: "",
			isAutoLoop: !isCheckboxTrue,
		});
	};
	return (
		<div className={styles.container}>
			<Audio isLoop={isAutoLoop} source={source}>
				Your browser does not support the HTML5 audio tag.
			</Audio>
			<div className={styles.innerContainer}>
				<p>
					{artist} - {title}
				</p>
				<div>
					<input
						type='checkbox'
						defaultChecked={isCheckboxTrue}
						id='loopCheckbox'
					/>
					<button onClick={(e) => handleChange(e)}>
						<ImLoop />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Play;
