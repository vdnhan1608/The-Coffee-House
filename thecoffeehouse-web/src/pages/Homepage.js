import ImageSlider from '../components/homepage/ImageSlider';
import Recommendation from '../components/homepage/Recommendation';

// FETCH LATER
const images = [
	'https://file.hstatic.net/1000075078/file/nhomvui_web_moi_desktop_dda86a0464364f93acf2bd4b2366e334.jpg',
	'https://file.hstatic.net/1000075078/file/donggia_web_moi_web_desktop_5b3d55c716f449939780bf68b1bca6c4.jpg',
	'https://file.hstatic.net/1000075078/file/chung_minh__web_moi__desktop_6fc4eeb6c24b419381de20b159b18723.jpg',
];

const recommendationList = [
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1675357918_cloudfee-hanh-nhan-nuong-min_6420a05af5b845db9851384f59adefbb_large.png',
		name: 'CloudFee Hạnh Nhân Nướng',
		price: 49000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_9d197e1e3ee64471aa9a0b346e11a8b7_large.jpg',
		name: 'TheCoffeeHouse Sữa Đá',
		price: 39000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_d9df65cb65ca4ed68c098b84b93d648d_large.png',
		name: 'Hi-Tea Vải',
		price: 49000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_61103101093945f39c1ce09c6efdc62f_large.png',
		name: 'Cà Phê Sữa Đá',
		price: 29000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_87cd8bedc3c14a7499fbea25e642efef_large.jpg',
		name: 'Bánh Mì VN Thịt Nguội',
		price: 35000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_87cd8bedc3c14a7499fbea25e642efef_large.jpg',
		name: 'Bánh Mì VN Thịt Nguội',
		price: 35000,
	},
	{
		thumbnail:
			'https://product.hstatic.net/1000075078/product/1655348107_mochi-choco_accc0b57d3cb4e38b17eac786e31322c_large.jpg',
		name: 'Mochi Kem Chocolate',
		price: 19000,
	},
];
export function Homepage() {
	return (
		<>
			<h1>Homepage</h1>
			<ImageSlider images={images}></ImageSlider>
			<Recommendation list={recommendationList}></Recommendation>
		</>
	);
}
