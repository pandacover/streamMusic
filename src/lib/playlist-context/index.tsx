import { createContext } from "react";

export interface PlaylistType {
	id: string;
	title: string;
	artist: string;
	source: string;
	image: string;
}

export type ContextType = {
	playlist: Array<PlaylistType>;
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
};

const PlaylistContext = createContext<ContextType>({
	playlist: new Array<PlaylistType>(),
	setPlaylist: () => null,
});

export default PlaylistContext;
