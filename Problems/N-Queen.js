/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n, start = 0 , mat) {
    var mat = [...new Array(n)].map( ele => new Array(n).fill(".") );
    var len = mat.length
    var result = [];
    var count = 0
    helper(0, mat);
    return result
    
    function helper(row , mat ){
        if(row == n){
            result.push([...mat].map(ele => ele.join("")));
            return
        }
        for(let j=0; j<len; j++){
            if(checkDigonal(row , j ,mat, n) ){
                mat[row][j] = 'Q';
                helper(row + 1 , mat)
                mat[row][j] = '.';
            }   
        } 
    }
};

function checkDigonal(i , j ,mat, len){
    
    var x = i-1;
    var y = j-1;
    
        while(x>= 0 && x < len && y>=0 && y<len){
            if(mat[x][y] == 'Q')return false
            x = x-1;
            y = y-1;
        }
        x = i-1;
        y = j+1;
    
        while(x>= 0 && x < len && y>=0 && y<len){
            if(mat[x][y] == 'Q')return false
            x = x-1;
            y = y+1;
        }
        x = i-1;
        y = j
        while(x>= 0 && x < len && y>=0 && y<len){
            if(mat[x][y] == 'Q')return false
            x--
        }
    return true
}