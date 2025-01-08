function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((value, index) => {
		return value === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender); //метод для получения нужных пользователей

	if (filteredUsers.length === 0) {
		return 0;
	}

	//Формирование среднего значения, используется reduce:
	const sumAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
	const averageAge = sumAge / filteredUsers.length;
	return averageAge;

	//Вариант, когда отдельно формируется массив только возрастов через map, а далее среднее через reduce:
	/*const ages = filteredUsers.map(user => user.age)
	const averageAge = (ages.reduce((sum, age) => (sum + age)))/filteredUsers.length;
	return averageAge;*/
}