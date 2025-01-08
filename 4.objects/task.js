function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) { //проверка на то, что оценки есть (студент не отчислен)
		return;
	}
	if (!!marksToAdd.length) { //если поле не пустое, то
		this.marks.push(...marksToAdd);
	}
	return;
}


Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) { //если нет поля marks или есть, но пустое, то
		return 0;
	}
	const sum = this.marks.reduce((acc, item) => acc + item); //если поле есть, то считаем average
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) { //функция, которая принимает параметр причина отчисления
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
