"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let D = Math.pow(b, 2) - 4 * a * c;
	if (D > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	} else if (D === 0) {
		arr[0] = -b / (2 * a);
	} else if (D < 0) {
		arr = [];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let perc = parseInt(percent) / 100 / 12; //преобразование процентной ставки в месячную
	let contr = parseInt(contribution); //принятый первоначальный взнос 
	let am = parseInt(amount); //принятая сумма кредита
	let count = parseInt(countMonths); //принятый срок кредита

	if (isNaN(perc) || perc < 0) {
		return `Введена неверная "Процентная ставка" ${percent}`;
	} else if (isNaN(contr) || contr < 0) {
		return `Введен неверный "Первоначальный взнос" ${contribution}`;
	} else if (isNaN(am) || am < 0) {
		return `Введена неверная "Сумма кредита" ${amount}`;
	} else {
		if (isNaN(count) || count < 0) {
			return `Введен неверный "Срок ипотеки" ${countMonths}`;
		}
		let S = am - contr; //тело кредита - сумма, возвращаемая банку
		let payment = S * (perc + perc / (((1 + perc) ** count) - 1)); //ежемесячная оплата по формуле
		let totalAmount = (payment * count).toFixed(2); //общая сумма с округлением до 2 знаков
		console.log(totalAmount);
		return +totalAmount; //преобразование в число
	}
}
