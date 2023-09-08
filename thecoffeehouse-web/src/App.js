import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { Blogs } from './pages/Blogs';
import { Collections } from './pages/Collections';
import { Homepage } from './pages/Homepage';
import { Menu } from './pages/Menu';
import { Shops } from './pages/Shops';
import { Counter } from './features/counter/Counter';
function App() {
	return (
		<>
			<Navigation></Navigation>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/collections" element={<Collections />} />
				<Route path="/menus" element={<Menu />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/shops" element={<Shops />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</>
	);
}

export default App;
