import { Layout, Explore } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Explore />} />
			</Routes>
		</Layout>
	);
};
export default App;
