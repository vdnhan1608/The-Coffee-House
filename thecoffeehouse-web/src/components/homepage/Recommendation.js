import { currencyFormat } from '../utils/currency';
import './Recommendation.css';
const Recommendation = ({ list }) => {
	console.log(list);
	return (
		<div className="recommendationList">
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
