function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
			return `${title} by ${author}, ${pages} pages, ${read} `
	};
}


alert('connected')
const tutti = new Book('Tutti', 'joven', 290, 'not yet read')
console.log(tutti.info())