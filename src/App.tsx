import { Layout, Explore, Playlist, About } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Explore />} />
				<Route path='/playlist' element={<Playlist />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</Layout>
	);
};
export default App;
