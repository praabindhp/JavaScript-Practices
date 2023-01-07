class OOPs {
    constructor(name) {
        this.name = name;
    }

    // Getter method
    get langName() {
        return this.name;
    }

    // Setter method
    set langName(x) {
        this.name = x;
    }
    hello() {
        console.log(`Hello ${this.name}`)
    }
}

let obj = new OOPs('Praabindh');
console.log(obj.name);

obj.langName = 'Pradeep';
console.log(obj.name);