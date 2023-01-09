// Packages
const readline = require('readline-sync'); // npm i readline-sync

// Entry
console.log("Welcome, To Age Retriever !");

// Initiating Constants & Variables
const ageDirectory = {};

let firstName = '';
let lastName = '';
let dob = '';
let createdTime = Date(dob);
let count = 0;
n = readline.question("Enter Number Of Person(s) : ");

// Getting Informations
for (let i = 0; i < n; i++) {
    count += 1;
    const personArray = [];
    firstName = readline.question("\n[" + count + "] Person's First Name : ");
    personArray.push(firstName);
    lastName = readline.question("[" + count + "] Person's Last Name : ");
    personArray.push(lastName);
    dob = readline.question("[" + count + "] Person's D.O.B [YYYY-MM-DD]: ");
    personArray.push(dob)
    Object.assign(ageDirectory, {
        [i]: personArray
    })
    console.log('\nThank You, Datas Are Stored.')
}

// Testing
// Instantiate Object
ageDirectory.createdTime = createdTime;
console.log(ageDirectory);

// Function To Get The Day Born
function findMonth(month) {
    switch (month) {
        case ('01' || '1'):
            console.log("January");
            break;
        case ('02' || '2'):
            console.log("Monday");
            break;
        case ('03' || '3'):
            console.log("Tuesday");
            break;
        case ('04' || '4'):
            console.log("Wednesday");
            break;
        case ('05' || '5'):
            console.log("Thursday");
            break;
        case ('06' || '6'):
            console.log("Friday");
            break;
        case ('07' || '7'):
            console.log("Saturday");
            break;
        case ('08' || '8'):
            console.log("Saturday");
            break;
        case ('09' || '9'):
            console.log("Saturday");
            break;
        case '10':
            console.log("Saturday");
            break;
        case '11':
            console.log("November");
            break;
        case '12':
            console.log("December");
            break;
        default:
            console.log("Not A Day");
    }
}

function calculate_age(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

// Extracting Values
for (let j = 0; j < n; j++) {
    firstName = ageDirectory[j][0];
    lastName = ageDirectory[j][1];
    date = ageDirectory[j][2];

    console.log('\nHowdy, ' + firstName + ' ' + lastName + ' !');
    const dateArray = date.split('-');
    let mydate = new Date(date);
    console.log('You Were Born On ' + mydate.toDateString());

    console.log('You Are ' + calculate_age(new Date(dateArray[0], dateArray[1], dateArray[2])) + ' Years Old');
}

// End Of Program

// Output

// Welcome, To Age Retriever !
// Enter Number Of Person(s) : 2

// [1] Person's First Name : Praabindh            
// [1] Person's Last Name : Pradeep
// [1] Person's D.O.B [YYYY-MM-DD]: 2000-12-10

// Thank You, Datas Are Stored.

// [2] Person's First Name : Pradeep
// [2] Person's Last Name : Kumar
// [2] Person's D.O.B [YYYY-MM-DD]: 1970-08-27

// Thank You, Datas Are Stored.
// {
//   '0': [ 'Praabindh', 'Pradeep', '2000-12-10' ],
//   '1': [ 'Pradeep', 'Kumar', '1970-08-27' ],
//   createdTime: 'Sun Jan 08 2023 20:26:05 GMT+0530 (India Standard Time)'
// }

// Howdy, Praabindh Pradeep !
// You Were Born On Sun Dec 10 2000
// You Are 21 Years Old

// Howdy, Pradeep Kumar !
// You Were Born On Thu Aug 27 1970
// You Are 52 Years Old