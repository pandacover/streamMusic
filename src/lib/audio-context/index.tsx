import { createContext } from "react";

export interface CurrentSongInterface {
	title: string;
	artist: string;
	source: string;
	image: string;
	isAutoLoop?: boolean;
}

export interface ContextType {
	currentSong: CurrentSongInterface;
	setCurrentSong: React.Dispatch<React.SetStateAction<CurrentSongInterface>>;
}

const AudioContext = createContext<ContextType>({
	currentSong: { title: "", artist: "", source: "", image: "" },
	setCurrentSong: () => null,
});

export default AudioContext;
