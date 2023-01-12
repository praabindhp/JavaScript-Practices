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

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Magazine Object
const mag1 = new Magazine('Mag One', 'Praabindh', '2018', 'Jan')


// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());
console.log(mag1);