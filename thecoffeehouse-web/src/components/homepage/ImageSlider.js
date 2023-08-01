import './ImageSlider.css';
import { useState } from 'react';
const ImageSlider = ({ images }) => {
	console.log(images);
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToNext = () => {
		if (currentIndex === images.length - 1) setCurrentIndex(0);
		else setCurrentIndex(currentIndex + 1);
	};

	const goToPrevious = () => {
		if (currentIndex === 0) setCurrentIndex(images.length - 1);
		else setCurrentIndex(currentIndex - 1);
	};
	return (
		<div className="imageSliderContainer">
			<div className="prevBtn" onClick={goToPrevious}></div>
			<div className="nextBtn" onClick={goToNext}></div>
			<div className="imageContainer">
				<img src={images[currentIndex]} alt="1" />
			</div>
			<div className="dotContainter">
				{images.map((item, index) => (
					<div
						className="dot"
						key={index}
						style={{
							color: index === currentIndex ? '#e57905' : '#000000',
						}}
					>
						•
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
