// Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} Was Written By ${this.author} In ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear - this.year;
        return `${this.title} Is ${years} Years Old`;
    }
}

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Everything In My Space';
// book1.author = 'Praabindh';
// book1.year = '2022';

const book1 = Object.create(bookProtos, {
    title: { value: 'Everything In My Space' },
    author: { value: 'Praabindh' },
    year: { value: '2022' }
});