import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { Counter } from './features/counter/Counter';
import { Blogs } from './pages/Blogs';
import { Coffees } from './pages/Coffees';
import { Homepage } from './pages/Homepage';
import { Menu } from './pages/Menu';
import { Teas } from './pages/Teas';
function App() {
	return (
		<>
			<Navigation></Navigation>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/coffees" element={<Coffees />} />
				<Route path="/teas" element={<Teas />} />
				<Route path="/menus" element={<Menu />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</>
	);
}

export default App;
