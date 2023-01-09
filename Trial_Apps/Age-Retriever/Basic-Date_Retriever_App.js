// Constructor Function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Instantiate Object
const person1 = new Person('Praabindh', 'Pradeep', '12-10-2000');
const person2 = new Person('Pradeep', 'Kumar', '8-27-1970');

// Function To Get The Day Born
function getTheDay(birthDay) {
    switch (birthDay) {
        case '0':
            console.log("Sunday");
            break;
        case '1':
            console.log("Monday");
            break;
        case '2':
            console.log("Tuesday");
            break;
        case '3':
            console.log("Wednesday");
            break;
        case '4':
            console.log("Thursday");
            break;
        case '5':
            console.log("Friday");
            break;
        case '6':
            console.log("Saturday");
            break;
        default:
            console.log("Not A Day");
    }
}

// Extracting Values
console.log('Howdy, ' + person1.firstName + ' ' + person1.lastName + ' !')
console.log(person1.dob.getDate());
let birthDay1 = String(person1.dob.getDay());
getTheDay(birthDay1)
console.log(person1.dob.getFullYear());

console.log('\nHowdy, ' + person2.firstName + ' ' + person2.lastName + ' !')
console.log(person2.dob.getDate());
let birthDay2 = String(person2.dob.getDay());
getTheDay(birthDay2)
console.log(person2.dob.getFullYear());