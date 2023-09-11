import '../layouts/Coffees.css';

const coffees = [
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_21acf4a82dec437089bfb9dab3613fcf_large.jpg',
		name: 'Cà Phê Đen Đá Hộp (14 gói x 16g)',
		price: 58000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1684482444_bg-product-22_a83e76f903174022ab44e8e9748c001f_large.jpg',
		name: 'Cà Phê Đen Đá Túi (30 gói x 16g)',
		price: 110000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669707271_24lon-espresso-no_eb77a83b0dd04debbdc08c93f9bf1600_large.jpg',
		name: 'Thùng Cà Phê Sữa Espresso',
		price: 336000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669707292_6lon-espresso-no_9830b8034da84e2c8a6230180149dac8_large.jpg',
		name: 'Combo 6 Lon Cà Phê Espresso',
		price: 336000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1684727946_photo-2023-05-22-105837_e7fffad826dd4f15a62be5af767b9852_large.jpeg',
		name: 'Cà Phê Rang Xay Original 1 Túi 1KG',
		price: 235000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_25dfa4f577a54ecfa6803a482899b152_large.jpg',
		name: 'Cà Phê Rang Xay Original 1 250g',
		price: 60000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_89ced1e385654c2caa07e864fb8de86c_large.jpg',
		name: 'Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)',
		price: 44000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1639648355_ca-phe-sua-da-hoa-tan-tui-25x22gr_58ccbc02daeb4b41af1eb4dcf6e3e484_large.jpg',
		name: 'Cà Phê Sữa Đá Hòa Tan Túi 25 x 22g',
		price: 99000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1639648313_ca-phe-sua-da-hoa-tan-dam-vi-viet_01529a395b914b4385824a232e42eb9a_large.jpg',
		name: 'Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 g)',
		price: 48000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669707374_1642353251-ca-phe-dam-vi-viet-tui-new_b3ad8d06f60c4ec9bff5c2250b9c1694_large.jpg',
		name: 'Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G',
		price: 99000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/p6-lon-3in1_717216_b4e553c250484de099e6f59f59e64d32_large.jpg',
		name: 'Cà Phê Sữa Đá Pack 6 Lon',
		price: 84000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/24-lon-cpsd_225680_716d0f51edca416abcf32e40e9d3343f_large.jpg',
		name: 'Thùng 24 Lon Cà Phê Sữa Đá',
		price: 336000,
	},
];

export function Coffees() {
	return (
		<div className="collectionsContainer">
			<div className="coffeesContainer">
				<h2>Cà phê tại nhà</h2>
				<div className="coffees">
					{coffees.map((item, index) => (
						<div key={index} className="coffeeItem">
							<img src={item.thumbnail} alt="" />
							<p className="coffeeItemName">{item.name}</p>
							<p className="coffeeItemPrice">{item.price}đ</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
