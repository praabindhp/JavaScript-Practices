// A(x1, y1) - Coordinates Of 1st Point Of Rectangle A
// A(x2, y2) - Coordinates Of 2st Point Of Rectangle A

// B(x1, y1) - Coordinates Of 1st Point Of Rectangle B
// B(x2, y2) - Coordinates Of 2st Point Of Rectangle B

const readline = require('readline-sync');
let ax1 = Number(readline.question("Enter X1 For A : "));
let ay1 = Number(readline.question("Enter Y1 For A : "));
let ax2 = Number(readline.question("Enter X2 For A : "));
let ay2 = Number(readline.question("Enter Y2 For A : "));

let aArea = (ax2 - ax1) * (ay2 - ay1);
console.log("The Area Of Rectangle A : " + aArea);

let bx1 = Number(readline.question("Enter X1 For A : "));
let by1 = Number(readline.question("Enter Y1 For A : "));
let bx2 = Number(readline.question("Enter X2 For A : "));
let by2 = Number(readline.question("Enter Y2 For A : "));

let area1 = (ax2 - ax1) * (ay2 - ay1),
    area2 = (by2 - by1) * (bx2 - bx1);

if (bx1 >= ax2 || by1 >= ay2 || ay1 >= by2 || ax1 >= bx2) {
    console.log("The Total Area : " + area1 + area2);
} else {
    totalArea = area1 + area2 - ((Math.min(bx2, ax2) - Math.max(ax1, bx1)) * (Math.min(ay2, by2) - Math.max(ay1, by1)));
    console.log("The Total Area : " + totalArea);
}

// Output

// Tasks
// Create A Circular Doubly LinkedList
// Insert At Position, Delete At Given Position, Insert At Beginning, Delete At The End
// Remove Duplicates
// Merge LinkList 1 To Another LinkedList 2 At A Position