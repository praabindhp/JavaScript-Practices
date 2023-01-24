const readline = require('readline-sync');

function searchingTheWord(matrix, word) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (depthSearch(matrix, word, i, j, 0)) {
          return true;
        }
      }
    }
    return false;
  }
  
  function depthSearch(matrix, word, i, j, k) {
    if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length) {
      return false;
    }
    if (matrix[i][j] !== word[k]) {
      return false;
    }
    if (k === word.length - 1) {
      return true;
    }
    let temp = matrix[i][j];
    matrix[i][j] = '#';
    let found = depthSearch(matrix, word, i + 1, j, k + 1) ||
                depthSearch(matrix, word, i - 1, j, k + 1) ||
                depthSearch(matrix, word, i, j + 1, k + 1) ||
                depthSearch(matrix, word, i, j - 1, k + 1);
    matrix[i][j] = temp;
    return found;
  }
  
  let matrix = [  ['C', 'O', 'D', 'K', 'X', 'A'],
  ['G', 'T', 'I', 'N', 'G', 'P'],
  ['L', 'K', 'O', 'L', 'M', 'P'],
  ['G', 'A', 'A', 'R', 'A', 'L'],
  ['K', 'F', 'T', 'G', 'R', 'E'],
  ['Z', 'W', 'L', 'M', 'T', 'O']
  ];

let word = readline.question("Enter The Word To Be Searched : ");
console.log(searchingTheWord(matrix, word));

// Track Word - ['MAT', 'CAT', 'RAT', 'APPLE'] - Return The Found Strings [...]
// Trapping The Rain Water - 42 LeetCode
// Largest Rectangle In Histogram - 84 LeetCode
// Flood Fill Algorithm