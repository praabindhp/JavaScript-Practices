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

let totalQuestions = readline.question('Enter Number Of Questions : ');
let i = 0;
while (i <= totalQuestions) {
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
        i = i + 1;
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
// Students' Option
const studentAnswers = [];
// Display Question
console.log("Welcome, Student !");
console.log("All The Very Best Of Luck :}");

for (let ques in quiz) {
    console.log("The Question Is : ");
    console.log(`${ques}`);
    console.log("The Options Are : ");
    let optionNumber = 0;
    for (let answer of quiz[ques]) {
        optionNumber = optionNumber + 1;
        console.log("Option " + optionNumber + " : " + `${answer}`);
    }
    // Get Option
    let ans = readline.question('Enter Your Option (A, B, C, D) : ');
    studentAnswers.push(ans);

}

// End Program