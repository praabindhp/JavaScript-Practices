const readline = require('readline-sync');
let n = readline.question("Enter The Number Of Rows : ");
let str = '';
let str1 = '';
let sum = 1;
let rows = n;
let sumBelow = 1;
for (let i = 0; i < n; i++) {
    str = '';
    str1 = '';
    for (let j = 0; j < i; j++) {
        str += '    ';
    }
    let k = (rows) * (rows);
    for (let j = 0; j < n - i; j++) {
        str += sum + ' * ';
        str1 += k + sum + ' * ';
        sum++;
        if (j == rows - 1) str += str1 + "\n";

    }
    rows--;
    console.log(str);
}