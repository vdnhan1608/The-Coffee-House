import ImageSlider from '../components/ImageSlider';

const images = [
	'https://file.hstatic.net/1000075078/file/nhomvui_web_moi_desktop_dda86a0464364f93acf2bd4b2366e334.jpg',
	'https://file.hstatic.net/1000075078/file/donggia_web_moi_web_desktop_5b3d55c716f449939780bf68b1bca6c4.jpg',
	'https://file.hstatic.net/1000075078/file/chung_minh__web_moi__desktop_6fc4eeb6c24b419381de20b159b18723.jpg',
];
export function Homepage() {
	return (
		<>
			<h1>Homepage</h1>
			<ImageSlider images={images}></ImageSlider>
		</>
	);
}
