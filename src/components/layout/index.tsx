import Navbar from "./navbar";
import Play from "../play";
import { AudioContext, PlaylistContext } from "../../lib";
import { useState } from "react";
import { useLocation } from "react-router-dom";

type PropsType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
	const [currentSong, setCurrentSong] = useState({
		title: "",
		artist: "",
		source: "",
	});

	const [playlist, setPlaylist] = useState([
		{
			id: "",
			title: "",
			artist: "",
			image: "",
			source: "",
		},
	]);

	const currentLocation = useLocation();
	return (
		<AudioContext.Provider value={{ currentSong, setCurrentSong }}>
			<PlaylistContext.Provider value={{ playlist, setPlaylist }}>
				<Navbar />
				<main style={{ position: "relative", minHeight: "calc(100vh - 8em)" }}>
					<div>{children}</div>
					{currentLocation.pathname !== "/about" && <Play />}
				</main>
			</PlaylistContext.Provider>
		</AudioContext.Provider>
	);
};

export default Layout;
