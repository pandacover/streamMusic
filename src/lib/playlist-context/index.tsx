import { createContext } from "react";

export interface ContextType {
	playlist: {
		id: string;
		title: string;
		artist: string;
		source: string;
		image: string;
	}[];
	setPlaylist: React.Dispatch<
		React.SetStateAction<
			{
				id: string;
				title: string;
				artist: string;
				source: string;
				image: string;
			}[]
		>
	>;
}

const PlaylistContext = createContext<ContextType>({
	playlist: [{ id: "", title: "", artist: "", source: "", image: "" }],
	setPlaylist: () => null,
});

export default PlaylistContext;
