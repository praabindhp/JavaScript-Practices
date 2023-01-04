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
const questions = [];
const answers = [];
const quiz = {};
// Teachers Side
// Get Question
console.log("Welcome, Teacher !")

while (true) {
    const options = [];
    let q = readline.question('Enter The Question : ');
    if (q == '') {
        console.log("Thank You ! For Adding The Questions")
        break;
    } else {
        // Get Options
        let a = readline.question('Enter Option A : ');
        options.push(a);
        let b = readline.question('Enter Option B : ');
        options.push(b);
        let c = readline.question('Enter Option C : ');
        options.push(c);
        let d = readline.question('Enter Option D : ');
        options.push(d);
        // Get Correct Option
        let o = readline.question('Enter The Correct Option (A, B, C, D) : ');
        answers.push(o);

    }

    Object.assign(quiz, {
        [q]: options
    })

    // Testing
    console.log("Quiz");
    console.log(quiz);
    console.log("Answers");
    console.log(answers);
    console.log("Options");
    console.log(options);
}

// Students Side
// Display Question
console.log("Welcome, Student !");
console.log("The Question Is : ");
console.log(q);
console.log("The Options Are : ");
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Get Options
let ans = readline.question('Enter Your Option');

// Answer Check Function Call
checkAns(ans, o);

// End Program