// function pow(x, n) {
//     let result = 1;

//     // multiply result by x n times in the loop
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }

//     return result;
//   }

//   console.log( pow(2, 3) ); // 8

const readline = require('readline-sync');

let x = readline.question("Enter The Number : ");
let n = readline.question("Enter The Exponent : ");

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(`The Number ` + x + ` To The Exponent Of ` + n + ` Is ` + pow(x, n));