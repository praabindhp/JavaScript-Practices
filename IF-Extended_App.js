// let a = +prompt("Enter Number To Be Found", '');

// while (true) {
//     let x = +prompt("Enter The Guessed Number", '');

//     if (x == a) {
//         alert('Exactly!');
//         break;
//     } else if (x < a) {
//         alert('Too Small');
//     } else if (x > a) {
//         alert('Too Big');
//     } else {
//         alert("Not Such Values");
//     }
// }

// Packages
const readline = require('readline-sync') // npm i readline-sync
    // Modules
    // Inputs
let a = Number(readline.question('Enter The Number To Be Found : '));
//Loop
while (true) {
    let x = Number(readline.question('Enter The Guess : '));
    // Inputs
    if (x == a) {
        console.log("Exactly")
        break;
    } else if (x < a) {
        console.log("Too Small");
    } else if (x > a) {
        console.log("Too Big");
    }
}
// End Program