import './Shop.css';
import { useState } from 'react';
const Shop = ({ shops }) => {
	console.log(shops);
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<div className="shopContainer">
			{/* {shops.map((item, index) => (
				<div key={index} className="shopInfo">
					<div className="shopDes">
						<h1>The Coffee House</h1>
						<h1>{item.name}</h1>
						<p>{item.description}</p>
						<div className="ExploreShopBtn">Tìm hiểu thêm</div>
					</div>
					<div className="thumbnail">
						<img src={item.thumbnail} alt="" />
					</div>
				</div>
			))} */}
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
