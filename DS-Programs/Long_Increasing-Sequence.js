var longestIncreasingPath = function(M) {
    let ylen = M.length, xlen = M[0].length, ans = 0,
        storey = Array.from({length: ylen}, el => new Uint16Array(xlen))

        const dfs = (y, x) => {
        if (storey[y][x]){
            return storey[y][x]
        }

        let val = M[y][x]
        storey[y][x] = 1 + Math.max(
            y < ylen - 1 && M[y+1][x] < val ? dfs(y+1,x) : 0,
            y > 0 && M[y-1][x] < val ? dfs(y-1,x) : 0,
            x < xlen - 1 && M[y][x+1] < val ? dfs(y,x+1) : 0,
            x > 0 && M[y][x-1] < val ? dfs(y,x-1) : 0)
        return storey[y][x]
    }

    for (let i = 0; i < ylen; i++)
        for (let j = 0; j < xlen; j++)
            ans = Math.max(ans, dfs(i, j))

    return ans
};

const matrixA = [
    [7,6,5,3,4,5],
    [8,2,4,2,1,8],
    [5,4,3,5,6,7],
    [9,8,2,1,8,0],
    [6,0,1,4,3,1],
    [3,8,8,7,6,4]]

console.log(longestIncreasingPath(matrixA))

// Greedy Task

// Sudoku Problem
// N-Queen Problem
// Find All The Subset Of An Array
// Find All The Subsequence Of An Array
// Find All The SubArray Of An Array