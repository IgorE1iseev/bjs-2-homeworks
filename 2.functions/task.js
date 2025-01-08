function getArrayParams(...arr) {

	let min = Infinity; //либо вариант с arr[0]
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i];
	}
	const avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	if (arr.length === 0) return 0; //проверка на наличие элементов
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let max = arr[0]; //либо с Infinity как в задаче выше
	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) { //чётное. остаток после деления на 2 равен 0
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i]; //иначе нечётное
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) return 0;
	return +(sumEvenElement / countEvenElement).toFixed(2);
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity; // arr[0] уже не подходит, так как массив массивов arrOfArr
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]); //результат "функции-насадки" из задачи выше
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
