// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    console.log('Book Instantiated !');
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} Was Written By ${this.author} In The Year ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} Is ${years} Years Old`;
}

// Revised / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate
const book1 = new Book('Everything In My Space', 'Praabindh', '2022');
const book2 = new Book('Kashmir Diaries', 'Pradeep', '1987');

console.log(book2);
book2.revise('2018');
console.log(book2);