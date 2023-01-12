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
}

// Magazine Sub-Class
// Class Magazine() {
//     constructor(title, author, year, month) {
//         super(title, author, year);
//         this.month = month;
//     }
// }