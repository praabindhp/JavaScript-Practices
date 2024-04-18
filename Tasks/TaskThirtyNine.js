// Constructor Function

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
}

// Instantiate Object
const person1 = new Person('Praabindh', 'Pradeep', '10-12-2000');
const person2 = new Person('Pradeep', 'Kumar', '8-27-1970');

birthDay = person1.dob.getDay();
// Extracting Values
console.log(person1.dob.getDate());
console.log();
console.log(person1.dob.getFullYear());