import { createContext } from "react";

export interface ContextType {
	currentSong: {
		title: string;
		artist: string;
		source: string;
	};
	setCurrentSong: React.Dispatch<
		React.SetStateAction<{
			title: string;
			artist: string;
			source: string;
		}>
	>;
}

const AudioContext = createContext<ContextType>({
	currentSong: {
		title: "",
		artist: "",
		source: "",
	},
	setCurrentSong: () => null,
});

export default AudioContext;
