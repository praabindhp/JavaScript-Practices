class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} Was Written By ${this.author} In The Year ${this.year}`;
    }

    // getAge
    getAge = function() {
        const years = new Date().getFullYear - this.year;
        return `${this.title} Is ${years} Years Old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Pra & Pri - Books';
    }
}

// Instantiate Object
const book1 = new Book('Everything In My Space', 'Praabindh', '2022');
console.log(book1);
console.log(Book.topBookStore());