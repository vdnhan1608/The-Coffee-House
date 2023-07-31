import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Collections } from './pages/Collections';
import { Menu } from './pages/Menu';
import { Blogs } from './pages/Blogs';
import { Shops } from './pages/Shops';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/collections">Collection</Link>
					</li>
					<li>
						<Link to="/menus">Menu</Link>
					</li>
					<li>
						<Link to="/blogs">Blogs</Link>
					</li>
					<li>
						<Link to="/shops">Shop</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/collections" element={<Collections />} />
				<Route path="/menus" element={<Menu />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/shops" element={<Shops />} />
			</Routes>
		</>
	);
}

export default App;
