import { currencyFormat } from '../utils/currency';
import './Recommendation.css';
const Recommendation = ({ list }) => {
	console.log(list);
	return (
		<div className="recommendationList">
			{/* <img
				className="thumbnail"
				src="https://file.hstatic.net/1000075078/file/banner_app_2_c3dea7cad7cb4fad94f162ea6ccd388b.jpg"
				alt=""
			/> */}
			{list.map((item, index) => (
				<div className="drink" key={index}>
					<img src={item.thumbnail} alt="recommendation" />
					<p className="name">{item.name}</p>
					<p className="price">{currencyFormat(item.price)}</p>
				</div>
			))}
		</div>
	);
};

export default Recommendation;
