import './Shop.css';
import { useState } from 'react';
const Shop = ({ shops }) => {
	console.log(shops);
	const [currentIndex, setCurrentIndex] = useState(0);
	// TODO THis later
	return (
		<div className="shopContainer">
			<div className="shopDes">
				<h1>The Coffee House</h1>
				<h1>{shops[currentIndex].name}</h1>
				<p>{shops[currentIndex].description}</p>

				<div className="ExploreShopBtn">Tìm hiểu thêm</div>
			</div>
			<div className="thumbnail">
				<img src={shops[currentIndex].thumbnail} alt="" />
			</div>
		</div>
	);
};

export default Shop;
