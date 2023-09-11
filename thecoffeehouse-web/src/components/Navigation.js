import { Link } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<h1>Home</h1>
					</Link>
				</li>
				<li>
					<Link to="/coffees" style={{ textDecoration: 'none' }}>
						<h1>Cà phê</h1>
					</Link>
				</li>
				<li>
					<Link to="/teas" style={{ textDecoration: 'none' }}>
						<h1>Trà</h1>
					</Link>
				</li>
				<li>
					<Link to="/menus" style={{ textDecoration: 'none' }}>
						<h1>Menu</h1>
					</Link>
				</li>
				<li>
					<Link to="/blogs" style={{ textDecoration: 'none' }}>
						<h1>Chuyện nhà</h1>
					</Link>
				</li>
				<li>
					<Link to="/shops" style={{ textDecoration: 'none' }}>
						<h1>Cửa hàng</h1>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
