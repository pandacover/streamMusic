import { useState, useEffect } from "react";

export interface AudioPropsType {
	children: React.ReactNode;
	isAutoPlay?: boolean;
	isLoop?: boolean;
	source: string;
}

const Audio = ({
	children,
	isAutoPlay = true,
	isLoop = false,
	source,
}: AudioPropsType) => {
	const [sourceState, setSourceState] = useState("");
	useEffect(() => {
		setSourceState(source);
	}, [source]);
	return (
		<audio
			controls={true}
			autoPlay={isAutoPlay}
			loop={isLoop}
			preload='metadata'
			src={sourceState}
			onPlayingCapture={(e) => console.log(e)}
		>
			{children}
		</audio>
	);
};

export default Audio;
