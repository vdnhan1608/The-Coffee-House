export function currencyFormat(money) {
	// let result = '';
	// while (money > 0) {
	// 	if (money >= 1000) result = '.000' + result;
	// 	else result = money.toString() + result;
	// 	money = money / 1000;
	// }
	return money.toString() + 'đ';
}
