// Packages
const readline = require('readline-sync'); // npm i readline-sync

// Modules
function checkAns(studentAnswers, answers) {
    let marks = 0;
    for (let val = 0; val < studentAnswers.length; val++) {
        if (studentAnswers[val] == answers[val]) {
            marks = marks + 1;
        }
    }

    let totalQuestions = studentAnswers.length;
    if (marks > (totalQuestions / 2)) {
        console.log("\nGreat !!! The Answers Are Correct :(");
        console.log("\nYou Scored " + marks + " Out Of " + totalQuestions);
    } else {
        console.log("\nNo !!! Better Luck Next Time :(");
        console.log("\nYou Scored " + marks + " Out Of " + totalQuestions);
    }
}

// Inputs
const answers = [];
const quiz = {};
// Teachers Side
// Get Question
console.log("Welcome, Teacher !")

let i = 0;
while (true) {
    const options = [];
    let q = readline.question('Enter The Question : ');
    if (q == '') {
        console.log("\nThank You ! For Adding The Questions")
        break;
    } else {
        // Get Options
        let a = readline.question('Enter Option 1 : ');
        options.push(a);
        let b = readline.question('Enter Option 2 : ');
        options.push(b);
        let c = readline.question('Enter Option 3 : ');
        options.push(c);
        let d = readline.question('Enter Option 4 : ');
        options.push(d);
        // Get Correct Option
        let o = readline.question('\nEnter The Correct Option (1, 2, 3, 4) : ');
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
console.log("\nWelcome, Student !");
console.log("All The Very Best Of Luck :}");
for (let ques in quiz) {
    console.log("\nThe Question Is : ");
    console.log(`${ques}`);
    console.log("\nThe Options Are : ");
    let optionNumber = 0;
    for (let answer of quiz[ques]) {
        optionNumber = optionNumber + 1;
        console.log("Option " + optionNumber + " : " + `${answer}`);
    }
    // Get Option
    let ans = readline.question('Enter Your Option (1, 2, 3, 4) : ');
    studentAnswers.push(ans);
}

console.log(studentAnswers);
console.log("\nThank You ! For Attending The Test");
checkAns(studentAnswers, answers);
// End Program