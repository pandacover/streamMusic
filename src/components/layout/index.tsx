import Navbar from "./navbar";
import Play from "../play";
import { AudioContext } from "../../lib";
import { useState } from "react";

type PropsType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
	const [currentSong, setCurrentSong] = useState({
		title: "",
		artist: "",
		source: "",
	});
	return (
		<AudioContext.Provider value={{ currentSong, setCurrentSong }}>
			<Navbar />
			<main style={{ position: "relative", minHeight: "calc(100vh - 8em)" }}>
				<div>{children}</div>
				<Play />
			</main>
		</AudioContext.Provider>
	);
};

export default Layout;
