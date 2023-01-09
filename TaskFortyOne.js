// Constructor Function

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.getBirthYear = function() {
            return this.dob.getFullYear();
        };
        this.getFullName = function() {
            return `${this.firstName} ${this.lastName}`;
        };
    }
}

// Instantiate Object
const person1 = new Person('Praabindh', 'Pradeep', '12-10-2000');
const person2 = new Person('Pradeep', 'Kumar', '8-27-1970');

console.log(person1.getFullName());
console.log("Year Born : " + person1.getBirthYear());

// End Of Program

// Output
// Praabindh Pradeep
// Year Born : 2000