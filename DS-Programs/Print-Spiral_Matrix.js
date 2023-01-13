function printSpiralMatrix(matrix) {
    let rBeg = 0;
    let rEnd = matrix.length - 1;
    let cBeg = 0;
    let cEnd = matrix[0].length - 1;

    totalString = '';

    while (rBeg <= rEnd && cBeg <= cEnd) {
        for (let i = cBeg; i <= cEnd; i++) {
            totalString += matrix[rBeg][i] + " ";
        }
        rBeg++;

        for (let i = rBeg; i <= rEnd; i++) {
            totalString += matrix[i][cEnd] + " ";
        }
        cEnd--;

        if (rBeg <= rEnd) {
            for (let i = cEnd; i >= cBeg; i--) {
                totalString += matrix[rEnd][i] + " ";
            }
            rEnd--;
        }

        if (cBeg <= cEnd) {
            for (let i = rEnd; i >= rBeg; i--) {
                totalString += matrix[i][cBeg] + " ";
            }
            cBeg++;
        }
    }
}

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

// Output
// 1 2 3 4 5 10 15 20 25 24 23 22 21 16 11 6 7 8 9 14 19 18 17 12 13

printSpiralMatrix(matrix);
console.log(totalString);