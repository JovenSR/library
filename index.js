const modal = document.querySelector('.modal');
const btn = document.querySelector('#open');
const span = document.querySelector('.close');
const container = document.querySelector('.container');
const removeDiv = document.querySelector('.remove');


btn.addEventListener('click', (e) => {
	modal.style.display = 'block';
})

span.addEventListener('click', (e) => {
	modal.style.display = 'none';
})


window.addEventListener('click', (e) => {
	if(e.target == modal) {
		modal.style.display = 'none';
	}
})

let myLibrary = [];
let aBook = myLibrary.push(new Book('Fire & Blood: 300 Years Before A Game Of Thrones (a Targaryen History)', 'George R. R. Martin', 736, 'Not Yet Read'))

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function() {
	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} `
}

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
	let title = e.target.title.value;
	let author = e.target.author.value;
	let pages = e.target.pages.value;
	let read = e.target.status.value;

	if((pages % 1) !== 0) {
		alert('Please input Numbers')
		e.preventDefault();
	} else if(title == '' || author == '' || pages == '' || read == '') {
		alert('All fields must be filled out')
		e.preventDefault();
	} else {
		addBookToLibrary(e.target)
		form.reset();
		e.preventDefault();	
	}	
})


function addBookToLibrary(book) {
	myLibrary.push(new Book(book.title.value, book.author.value, book.pages.value, book.status.value))
	container.innerHTML = ''
	render()
}

function render() {
	//modal closes once form is submitted
	if(modal.style.display === 'block') {
		modal.style.display = 'none';
	}
	//showcases each book from the library
	myLibrary.forEach(function(item) {
		let div = document.createElement('div');
		let title = document.createElement('p');
		let author = document.createElement('p');
		let pages = document.createElement('p');
		let read = document.createElement('p');
		let remove = document.createElement('button')

		div.classList.add("div");
		title.classList.add("title");
		author.classList.add("author");
		pages.classList.add("pages");
		read.classList.add("read");
		remove.classList.add("remove")
		remove.setAttribute('id', myLibrary.indexOf(item))
		remove.addEventListener('click', (e) => {
			let index = remove.id;
			console.log(index);
			myLibrary.splice(index, 1);
			container.innerHTML = '';
			render();
		})
		
		title.innerHTML = 'Book: ' + item.title;
		author.innerHTML = 'Author: ' + item.author;
		pages.innerHTML = 'Pages: ' + item.pages;
		read.innerHTML = 'Status: ' + item.read;
		remove.innerHTML = 'Remove';

		div.append(title, author, pages, read, remove) 
		container.append(div);
	})
}

render()
