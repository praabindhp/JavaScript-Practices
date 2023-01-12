const s1 = "Hello";
console.log(s1.toUpperCase());
console.log(typeof s1);

const s2 = new String("Hello");
console.log(typeof s2);

// console.log(window);
// window.alert();

// console.log(navigator.appVersion);

const book1 = {
    title: 'Everything In My Space',
    author: 'Praabindh',
    year: '2022',
    getSummary: function() {
        return `${this.title} Was Written By ${this.author} In ${this.year}`;
    }
};

const book2 = {
    title: 'Kashmir Diaries',
    author: 'Pradeep',
    year: '2020',
    getSummary: function() {
        return `${this.title} Was Written By ${this.author} In The Year ${this.year}`;
    }
};

console.log(book2);
console.log(book1.getSummary());
console.log(Object.values(book1));