let originalMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let newMatrix = [];

for (let i = 0; i < originalMatrix.length; i++) {
    newMatrix[i] = new Array(originalMatrix[i].length);
}

let tRow = 0;
let bRow = originalMatrix.length - 1;
let lCol = 0;
let rCol = originalMatrix[0].length - 1;

let currentRow = 0;
let currentColumn = 0;

while (topRow <= bottomRow && lCol <= rCol) {
    for (let i = lCol; i <= rCol; i++) {
        newMatrix[topRow][currentColumn] = originalMatrix[topRow][i];
        currentColumn++;
    }
    topRow++;
    currentColumn = 0;

    for (let i = topRow; i <= bottomRow; i++) {
        newMatrix[currentRow][rCol] = originalMatrix[i][rCol];
        currentRow++;
    }
    rCol--;
    currentRow = 0;

    for (let i = rCol; i >= lCol; i--) {
        newMatrix[bottomRow][currentColumn] = originalMatrix[bottomRow][i];
        currentColumn++;
    }
    bottomRow--;
    currentColumn = 0;

    for (let i = bottomRow; i >= topRow; i--) {
        newMatrix[currentRow][lCol] = originalMatrix[i][lCol];
        currentRow++;
    }
    lCol++;
    currentRow = 0;
}

console.log(newMatrix);

// Output
// [
//   [ 16, 12, 3, 14, 10 ],
//   [ 7, 8, 9, 19, 15 ],
//   [ 13, <3 empty items>, 20 ],
//   [ 18, 17, <2 empty items>, 25 ],
//   [ 24, 23, 22, 21, <1 empty item> ]
// ]