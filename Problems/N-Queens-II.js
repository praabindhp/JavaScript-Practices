/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function(n) {
    const cols = new Set();
    const posDiag = new Set();
    const negDiag = new Set();
    let solutionCount = 0;
    
    function computePositionForRow(row) {
        if (row === n) {
            solutionCount += 1;
            return;
        }
        
        for (let col = 0; col < n; col += 1) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }
            
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            
            computePositionForRow(row + 1);
            
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
        }
    }
    
    computePositionForRow(0);
    
    return solutionCount;
};