// Packages
const readline = require('readline-sync'); // npm i readline-sync

// Modules
function checkAns(ans, o) {
    if (ans == o) {
        console.log("Great !!! The Answer Is Correct :(")
    } else {
        console.log("No !!! Better Luck Next Time :(")
    }
}

// Inputs
// Teachers Side
// Get Question
let q = readline.question('Enter The Question : ');

// Get Options
let a = readline.question('Enter Option A : ');
let b = readline.question('Enter Option B : ');
let c = readline.question('Enter Option C : ');
let d = readline.question('Enter Option D : ');

// Get Correct Option
let o = readline.question('Enter The Correct Option (A, B, C, D) : ');

// Students Side
// Display Question
console.log(q);

// Get Options
let ans = readline.question('Enter Your Option');
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// Answer Check Function Call
checkAns(ans, o);
// End Program