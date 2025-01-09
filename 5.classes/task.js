//1-е задание:

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = Math.min(this.state * 1.5, 100); //метод гарантирует, что состояние state не будет ниже 0 и выше 100
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

//2-е задание:

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book); //добавляет книгу в хранилище при состоянии больше 30
		}
	}
	findBookBy(type, value) { //метод, принимающий ключ для поиска (автор, год выпуска или название) и искомое значение
		const findedByParamBook = this.books.find(item => item[type] === value)
		return !!findedByParamBook ? findedByParamBook : null; //возвращает книгу в случае успеха, в ином случае ничего, если книга не найдена
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index != -1) { //если ничего не нашлось, то возвращается -1. поэтому != -1
			return this.books.splice(index, 1)[0]; //так как мы удаляем только одну книгу, возвращаемый массив будет содержать один элемент — саму книгу. Добавляем [0] и берем 1й (и единственный) элемент из массива книг, который возвращает splice
		}
		return null;
	}
}
