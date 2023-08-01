import ImageSlider from '../components/homepage/ImageSlider';
import NewDrink from '../components/homepage/NewDrink';
import Recommendation from '../components/homepage/Recommendation';
import Shop from '../components/homepage/Shop';

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

const shops = [
	{
		name: 'By The Coffee House',
		description:
			'Nơi cuộc hẹn tràn đầy với Cà phê đặc sản, Món ăn đa bản sắc và không gian cảm hứng',
		thumbnail:
			'https://file.hstatic.net/1000075078/file/sig-01_2c5b08d6b9294c82ac64901e12ae6106_master.png',
	},
	{
		name: 'Grand View',
		description:
			'Nhà mới quận 7 tọa lạc tại khu đô thị The Grand View, với những khu phố hiện đại, sầm uất, và nhộn nhiệp',
		thumbnail:
			'https://file.hstatic.net/1000075078/file/grandview1_281ebbd42e1e40368c783002bfda0054_master.jpg',
	},
	{
		name: 'Grace Tower',
		description:
			'Nhà mới Quận 7 tọa lạc tại The Grace Tower, thuộc khu phố nhộn nhịp, sầm uất. Cửa hàng nổi bật với không gian nhỏ nhắn nhưng lại có nhiều nguồn sáng tự nhiên, mang đến sự hứng thú năng động',
		thumbnail:
			'https://file.hstatic.net/1000075078/file/_kh_9431__1__e19a7a49963245b39b280271da3cd9fb_master.jpg',
	},
];
export function Homepage() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h1>Homepage</h1>
			<ImageSlider images={images}></ImageSlider>
			<Recommendation list={recommendationList}></Recommendation>
			<NewDrink></NewDrink>
			<Shop shops={shops}></Shop>
		</div>
	);
}
