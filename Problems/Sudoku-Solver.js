/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let rows = Array.from(new Array(9), () => new Array(10).fill(0));
     let cols = Array.from(new Array(9), () => new Array(10).fill(0));
     let boxes = Array.from(new Array(9), () => new Array(10).fill(0));
     
     for (let i = 0; i < 9; i++) {
         for (let j = 0; j < 9; j++) {
             const c = board[i][j];
             if (c !== '.') {
                 let num = parseInt(c);
                 let bx = Math.floor(j / 3);
                 let by = Math.floor(i / 3);
                 rows[i][num] = 1;
                 cols[j][num] = 1;
                 boxes[by * 3 + bx][num] = 1;
             }
         }
     }
     dfs(board, 0, 0, rows, cols, boxes);
 };
 
 function dfs(board, x, y, rows, cols, boxes) {
     
     if (y === 9) return true;
     
     let nextX = (x + 1) % 9;
     let nextY = nextX === 0 ? y + 1 : y;
 
     if (board[y][x] !== '.') return dfs(board, nextX, nextY, rows, cols, boxes);
     
     for (let i = 1; i <= 9; i++) {
         let bx = Math.floor(x / 3);
         let by = Math.floor(y / 3);
         let box_index = by * 3 + bx;
 
         if (!rows[y][i] && !cols[x][i] && !boxes[box_index][i]) {
 
             rows[y][i] = 1;
             cols[x][i] = 1;
             boxes[box_index][i] = 1;
             board[y][x] = i.toString();
 
             if (dfs(board, nextX, nextY, rows, cols, boxes)) return true;
 
             board[y][x] = '.';
             boxes[box_index][i] = 0;
             cols[x][i] = 0;
             rows[y][i] = 0;
         }
     }
     return false;
 }