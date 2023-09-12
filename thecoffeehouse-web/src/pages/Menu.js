import '../layouts/Menu.css';

const frosties = [
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686021160_phin-gato-new_f3bea355a32c446d83a6f278769ca948_large.png',
		name: 'Frosty Fin-Gato',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686021199_ca-phe-duong-den-new_f305495e75d34b8096374040e89acd2b_large.png',
		name: 'Frosty Cà Phê Đường Đen',
		price: '59.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686021186_caramel-arabica-new_4cd3ace239104d48a73f88fa69279c8b_large.png',
		name: 'Frosty Caramel Arabica',
		price: '59.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686021305_banh-kem-dau-new_cf09142d32ee48b2be9a3c69e17b00b7_large.jpg',
		name: 'Frosty Bánh Kem Dâu',
		price: '59.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686021314_choco-chip-new_2bde9aa36a784b31baa87c1b8b1be89a_large.png',
		name: 'Frosty Choco Chip',
		price: '59.000đ',
	},
];

const coffees = [
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686716532_dd-suada_4f58fb2c8ea8448f81610fb7a8fbb618_large.jpg',
		name: 'Đường Đen Sữa Đá',
		price: '45.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_9d197e1e3ee64471aa9a0b346e11a8b7_large.jpg',
		name: 'The Coffee House Sữa Đá',
		price: '39.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_61103101093945f39c1ce09c6efdc62f_large.png',
		name: 'Cà Phê Sữa Đá',
		price: '29.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1639377904_bac-siu_d2f15fb7fa024b528c6e9259f6637c9e_large.jpg',
		name: 'Bạc Sỉu',
		price: '29.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1639377926_bacsiunong_2fcb1a6f2b854713ae978429ff5851bb_large.jpg',
		name: 'Bạc Sỉu Nóng',
		price: '39.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_05191f05ea2343c1b66357bcbc92ad5c_large.jpg',
		name: 'Cà Phê Đen Đá',
		price: '29.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/bottlecfsd_496652_1603eae72b8b4d698a7d872ae604df81_large.jpg',
		name: 'Cà Phê Sữa Đá Chai Fresh 250ML',
		price: '75.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686716537_dd-latte_2dd78a3a238046aaa029d320ced8e1e3_large.jpg',
		name: 'Đường Đen Marble Latte',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/caramel-macchiato_143623_a18f3e47da4e4625837c61d6904d1223_large.jpg',
		name: 'Caramel Macchiato Đá',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/caramelmacchiatonong_168039_65d4d3cb87064383af6f80634ffd8060_large.jpg',
		name: 'Caramel Macchiato Nóng',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/latte-da_438410_3f4b86e9784b494b841e9613e254aeb1_large.jpg',
		name: 'Latte Đá',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/latte_851143_ebf0f49a8af748bc8ef498f19d11731b_large.jpg',
		name: 'Latte Nóng',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/classic-cold-brew_791256_fa689a80acd445bc989a40fcc3321f9d_large.jpg',
		name: 'Americano Đá',
		price: '45.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1636647328_arme-nong_05ee4b6985574436b9a26b143c68b704_large.jpg',
		name: 'Americano Nóng',
		price: '45.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/capu-da_487470_5def0b83f1da4a439e51740a9f83ebaa_large.jpg',
		name: 'Cappuccino Đá',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/cappuccino_621532_dc87b53d26224c6a87047685b7e65138_large.jpg',
		name: 'Cappuccino Nóng',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_3bcd0292c9f648d9a6cf85021ba6b9f8_large.jpg',
		name: 'Expresso Đá',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/espressonong_612688_6692a9674725412da950dcf1c1ccb2f8_large.jpg',
		name: 'Expresso Nóng',
		price: '45.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675329120_coldbrew-pbt_fa29593c2113480aa63b914462b4b85c_large.jpg',
		name: 'Cold Brew Phúc Bồn Tử',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/cold-brew-sua-tuoi_379576_bdcc412501084a078ab87504046b4db4_large.jpg',
		name: 'Cold Brew Sữa Tươi',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/classic-cold-brew_239501_afa4c0c5c1394b07b5868177d2dc5f3b_large.jpg',
		name: 'Cold Brew Truyền Thống',
		price: '45.000đ',
	},
];
const cloudFees = [
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675357918_cloudfee-hanh-nhan-nuong-min_6420a05af5b845db9851384f59adefbb_large.png',
		name: 'CloudFee Hạnh Nhân Nướng',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675329314_bg-cloudfee-caramel_e1304b3bfe6a443f870d4ac5017c4052_large.jpg',
		name: 'CloudFee Caramel',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675329376_bg-cloudfee-classic_6c9cf9ce107240b5bfe7f17b5a67ca39_large.jpg',
		name: 'CloudFee Hà Nội',
		price: '49.000đ',
	},
];
const cloudTeas = [
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675740758_cloudtea-oolong-nuong-kem-cheese-min_9bbf2f9a7601459a976c8e037d2e8134_large.png',
		name: 'CloudTea Oolong Nướng Kem Sữa',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675355728_cheese_a95347e0658f4f90a62f0c7f45c90300_large.jpg',
		name: 'CloudTea Oolong Nướng Kem Cheese',
		price: '55.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1675329651_bg-cloudtea-daxay_7cba4b801e8a43ba965e5128515beb6e_large.jpg',
		name: 'CloudTea Oolong Nướng Kem Dừa Đá Xay',
		price: '55.000đ',
	},
];

const hiTeaHealthy = [
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686716517_kombucha-dao_0b040df2740245beaecc4c73504438d2_large.jpg',
		name: 'Hi-Tea Đào Kombucha',
		price: '59.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1686716508_kombucha-yuzu_947c811107014069a3fb15c4d9a64d44_large.jpg',
		name: 'Hi-Tea Yuzu Kombucha',
		price: '59.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1669707649_bg-hitea-quyt-no_fd0c777093974d7aaa6cf5e9f3772a51_large.jpg',
		name: 'Hi-Tea Phúc Bồn Tử Madarin',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1669736859_hi-tea-yuzu-tran-chau_f084d63d74c54d5e8b6c6b688a43b698_large.png',
		name: 'Hi-Tea Yuzu Trân Châu',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_d9df65cb65ca4ed68c098b84b93d648d_large.png',
		name: 'Hi-Tea Vải',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1669737919_hi-tea-dao_a3734a0ec9154a47a16161026fa6ac3f_large.jpg',
		name: 'Hi-Tea Đào',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1653291175_da-tuyet-vai_e0dceaf30c8a4fecbf0297aa99233b9b_large.jpg',
		name: 'Hi-Tea Đá Tuyết Yuzu Vải',
		price: '59.000đ',
	},
];

const fruitTeas = [
	{
		image:
			'https://product.hstatic.net/1000075078/product/1649378747_tra-sen-nhan_3ab52dfe03dd46bea3a49ada3281d83e_large.jpg',
		name: 'Trà Long Nhãn Hạt Sen',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/1669736819_tra-dao-cam-sa-da_7378fa2862d446df9c168c033b4ae8de_large.png',
		name: 'Trà Đào Cam Sả - Đá',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/tdcs-nong_288997_91ffec0818714066b262fdf642374f9b_large.jpg',
		name: 'Trà Đào Cam Sả - Nóng',
		price: '59.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/tra-sen_905594_9b4a106ee40247ff85ae2a4a6d73497c_large.jpg',
		name: 'Trà Hạt Sen Đá',
		price: '39.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/tra-sen-nong_025153_aac334007f644bdb8671e13ccba0f510_large.jpg',
		name: 'Trà Hạt Sen Nóng',
		price: '49.000đ',
	},
	{
		image:
			'https://product.hstatic.net/1000075078/product/bottle_tradao_836487_6ea4c4b18ef84c29a389c16afd7eb9da_large.jpg',
		name: 'Trà Đào Cam Sả Chai Fresh 500ML',
		price: '105.000đ',
	},
];

export function Menu() {
	return (
		<div className="menu-container">
			<div className="menu-left-nav-bar">
				<p>Tất cả</p>
				<p>Cà Phê</p>
				<p>Cloud Tea</p>
				<p>Cloud Fee</p>
				<p>Frosty Đá xay</p>
				<p>Hi-tea Healthy</p>
				<p>Trà trái cây</p>
			</div>
			<div className="content">
				<div className="menu">
					<div className="menu-coffee-container">
						<h2>Cà Phê</h2>
						<div className="menu-coffee">
							{coffees.map((item, index) => (
								<div className="menu-coffee-item">
									<img src={item.image} alt="" />
									<p className="menu-coffee-item-name">{item.name}</p>
									<p className="menu-coffee-item-price">{item.price}</p>
								</div>
							))}
						</div>
					</div>
					<div className="menu-cloudTea-container">
						<h2>Cloud Tea</h2>
						<div className="menu-cloudTea">
							{cloudTeas.map((item, index) => (
								<div className="menu-cloudTea-item">
									<img src={item.image} alt="" />
									<p className="menu-cloudTea-item-name">{item.name}</p>
									<p className="menu-cloudTea-item-price">{item.price}</p>
								</div>
							))}
						</div>
					</div>
					<div className="menu-cloudFee-container">
						<h2>Cloud Fee</h2>
						<div className="menu-cloudFee">
							{cloudFees.map((item, index) => (
								<div className="menu-cloudFee-item">
									<img src={item.image} alt="" />
									<p className="menu-cloudFee-item-name">{item.name}</p>
									<p className="menu-cloudFee-item-price">{item.price}</p>
								</div>
							))}
						</div>
					</div>
					<div className="menu-frosty-container">
						<h2>Frosty</h2>
						<div className="menu-frosty">
							{frosties.map((item, index) => (
								<div className="menu-frosty-item">
									<img src={item.image} alt="" />
									<p className="menu-frosty-item-name">{item.name}</p>
									<p className="menu-frosty-item-price">{item.price}</p>
								</div>
							))}
						</div>
					</div>
					<div className="menu-hi-tea-healthy-container">
						<h2>Hi-tea Healthy</h2>
						<div className="menu-hi-tea-healthy">
							{hiTeaHealthy.map((item, index) => (
								<div className="menu-hi-tea-healthy-item">
									<img src={item.image} alt="" />
									<p className="menu-hi-tea-healthy-item-name">{item.name}</p>
									<p className="menu-hi-tea-healthy-item-price">{item.price}</p>
								</div>
							))}
						</div>
					</div>
					<div className="menu-fruitTea-container">
						<h2>Trà Trái Cây</h2>
						<div className="menu-fruitTea">
							{fruitTeas.map((item, index) => (
								<div className="menu-fruitTea-item">
									<img src={item.image} alt="" />
									<p className="menu-fruitTea-item-name">{item.name}</p>
									<p className="menu-hi-fruitTea-item-price">{item.price}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
