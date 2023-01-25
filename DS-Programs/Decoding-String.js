// Decoded Uses The Number Of Rows As Int Number Of String,
// Decode And Return The String

// Decode Until Reaching Specified Number Of Rows
// In Top Row - Begin The Position And Repeat Until The Entire String And Replace USing #

// Number Of Rows < The Length Original String
// Decoded String Any Trading Space

function slantedCipher(text, rows) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
    }
  
    let row = 0, col = 0, direction = 1;
    for (let i = 0; i < text.length; i++) {
      matrix[row][col] = text[i];
  
      if (row === 0 || row === rows - 1) {
        direction *= -1;
      }
  
      row += direction;
      col++;
    }
  
    let result = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          result += matrix[i][j];
        }
      }
    }
  
    return result;
  }
  
  console.log(slantedCipher("HELLO WORLD", 3));
    
// Task
// Less Than, Greater Than In A Array [1,2,3,4,5,6,7,8,9,10]
// Output - [1,2,3,4,5,6,7,8,9,10]

// Back Tracking
// Rat In A Maze
// Rat In A Maze In Multiple Steps

// House Robber
// House Robber With Circular Structure