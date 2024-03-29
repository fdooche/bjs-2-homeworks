"use strict"
//1
function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		console.log('дискриминат ${d} > 0, 2 корня');
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d == 0) {
		console.log('дискриминат ${d} > 0, 1 корень');
		let x1 = -b / (2 * a);
		arr.push(x1);
	} else if (d < 0) {
		console.log('дискриминат ${d} < 0, нет корней');
	}
	console.log(arr);

	return arr;
}

solveEquation(2, 4, 4)

//2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = parseInt(percent) / 100 / 12; //ставка
	let c = parseInt(contribution); //первый взнос
	let a = parseInt(amount); //общая сумма
	if (isNaN(p) || p < 0) {
		return 'Ставка содержит неверное значение ${percent}';
	} else if (isNaN(c) || c < 0) {
		return 'Первый взнос содержит неверное значение ${contribution}';
	} else if (isNaN(a) || a < 0) {
		return 'Общая сумма содержит неверное значение ${amount}';
	} else {
		let n = countMonths;
		let s = a - c; //тело кредита
		let pay = s * (p + (p / (((1 + p) ** n) - 1))); //ежемесячная плата
		let totalAmount = (pay * n).toFixed(2);
		console.log('Общая сумма по ипотеке — ${totalAmount}');
		return +totalAmount;
	}
}