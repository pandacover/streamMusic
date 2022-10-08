import { createContext } from "react";

export interface ContextType {
	currentSong: {
		title: string;
		artist: string;
		source: string;
		isAutoLoop?: boolean;
	};
	setCurrentSong: React.Dispatch<
		React.SetStateAction<{
			title: string;
			artist: string;
			source: string;
			isAutoLoop?: boolean;
		}>
	>;
}

const AudioContext = createContext<ContextType>({
	currentSong: {
		title: "",
		artist: "",
		source: "",
		isAutoLoop: false,
	},
	setCurrentSong: () => null,
});

export default AudioContext;
