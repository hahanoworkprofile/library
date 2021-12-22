let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read;

    this.info = () =>
        `${title} is written by ${author} with ${pages}. Status of reading is ${read}.`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let test = new Book("unknow", "unknows", "231", false);
addBookToLibrary(test);
let test2 = new Book("unknow2", "unknows", "235", true);
addBookToLibrary(test2);


const list = document.querySelector('.list');


myLibrary.forEach(book => {
    console.log(book);
    let card = document.createElement('div'); card.classList.add('card');
    let title = document.createElement('p'); title.textContent = book.title
    let author = document.createElement('p'); author.textContent = book.author;
    let pages = document.createElement('p'); pages.textContent = book.pages;
    let read = document.createElement('p'); read.TextContent = book.read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    list.appendChild(card);
})

