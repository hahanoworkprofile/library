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

function render() { 
    while (list.firstChild) list.removeChild(list.firstChild);
    errorText.textContent = "Errors: 0";
    myLibrary.forEach(book => {
        console.log(book);
        let card = document.createElement('div'); card.classList.add('card');
        let title = document.createElement('p'); title.textContent = book.title
        let author = document.createElement('p'); author.textContent = book.author;
        let pages = document.createElement('p'); pages.textContent = book.pages;
        let read = document.createElement('checkbox'); read.value = book.read;
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
    
        list.appendChild(card);
    })
}

const list = document.querySelector('.list');
const addBookButton = document.querySelector('.addBook');
const form = document.querySelector('.addForm');
const confirmButton = document.querySelector('.confirm')
const errorText = document.querySelector('.error');

addBookButton.addEventListener("click", e =>
    form.style.display != "none" ? form.style.display = "none" : form.style.display = "block");  



confirmButton.addEventListener("click", e => {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value; 
    let read = document.querySelector('#read').value; 
    let duplicate = false; 
    myLibrary.forEach(book => book.title == title ? duplicate = true : null);
    if (duplicate) {
        errorText.textContent = "Duplicate!";
    } else {
        addBookToLibrary(new Book(title, author, pages, read)); 
        render();
    }
});