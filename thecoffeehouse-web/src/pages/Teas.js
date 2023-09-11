import '../layouts/Coffees.css';
import Grid from '@mui/material/Grid';

const teas = [
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669706771_bg-tradao-min_62fc67f4a274405694335925011996b8_large.jpg',
		name: 'Trà Vị Đào Tearoma 14x14g',
		price: 32000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669880647_bg-trasua-min_4437f847f423409180787781a508fc6b_large.jpg',
		name: 'Trà Sữa Trân Châu Tearoma 250g',
		price: 38000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669706748_bg-tratatmatong-min_8c127f39139f4be188e160833e8e0d06_large.jpg',
		name: 'Trà Vị Tắc Mật Ong Tearoma 14x14g',
		price: 32000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1639646968_tra-oolong-tui-loc-tearoma-20x2gr_ddfaebf017e54c28a5867e7c4500371c_large.jpg',
		name: 'Trà Oolong Túi Lọc Tearoma 20x2G',
		price: 28000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1639647075_tra-lai-tui-loc-tearoma-20x2gr_58fc9d9700ab413598e9a57cd52ec3c8_large.jpg',
		name: 'Trà Lài Túi Lọc Tearoma 20x2G',
		price: 28000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1639648068_tra-sen-tui-loc-tearoma-20x2gr_8301c941cdf844e1bfc8a2e18cc98092_large.jpg',
		name: 'Trà Sen Túi Lọc Tearoma 20x2G',
		price: 28000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1639646846_tra-dao-tui-loc-tearoma-20x2gr_fd845ff5e3074257ba54bcac8d52262c_large.jpg',
		name: 'Trà Đào Túi Lọc Tearoma 20x2G',
		price: 28000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1641440575_gift-set-tearoma-1_d7fffc54e11446bd9454954ac2823898_large.jpeg',
		name: 'Giftset Trà Tearoma',
		price: 166000,
	},
];
export function Teas() {
	return (
		<div className="collectionsContainer">
			<div className="teasContainer">
				<h2>Trà tại nhà</h2>
				<div className="teas">
					{teas.map((item, index) => (
						<div key={index} className="teaItem">
							<img src={item.thumbnail} alt="" />
							<p className="teaItemName">{item.name}</p>
							<p className="teaItemPrice">{item.price}đ</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
