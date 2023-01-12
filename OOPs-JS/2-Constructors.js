// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    console.log('Book Instantiated !');
}

// Instantiate
const book1 = new Book('Everything In My Space', 'Praabindh', '2022');
const book2 = new Book('Kashmir Diaries', 'Pradeep', '1987');

console.log(book2);
console.log(book1);