import Navbar from "./navbar";
import { AudioContext, PlaylistContext, SearchContext } from "../../lib";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PlaylistType } from "../../lib/playlist-context";

type PropsType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
	const [currentSong, setCurrentSong] = useState({
		title: "",
		artist: "",
		source: "",
		image: "",
	});

	const [playlist, setPlaylist] = useState(Array<PlaylistType>);

	const [searchParams, setSearchParams] = useState(new String());

	const currentLocation = useLocation();

	return (
		<AudioContext.Provider value={{ currentSong, setCurrentSong }}>
			<PlaylistContext.Provider value={{ playlist, setPlaylist }}>
				<SearchContext.Provider value={{ searchParams, setSearchParams }}>
					<Navbar />
					<main
						style={{
							position: "relative",
							height: "calc(100vh - 8em)",
							minHeight: "calc(100vh - 8em)",
						}}
					>
						{children}
						{/* {currentLocation.pathname !== "/about" && <Play />} */}
					</main>
				</SearchContext.Provider>
			</PlaylistContext.Provider>
		</AudioContext.Provider>
	);
};

export default Layout;
