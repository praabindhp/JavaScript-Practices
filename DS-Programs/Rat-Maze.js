let N = 4;
let maze = [  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];

let visited = new Array(N);
for (let i = 0; i < N; i++) {
  visited[i] = new Array(N).fill(false);
}

let row = [1, -1, 0, 0];
let col = [0, 0, 1, -1];

let dfs = function (maze, x, y, visited) {
  if (x === N - 1 && y === N - 1) {
    visited[x][y] = true;
    return true;
  }

  for (let i = 0; i < 4; i++) {
    let newX = x + row[i];
    let newY = y + col[i];

    if (isSafe(maze, newX, newY, visited)) {
      visited[newX][newY] = true;
      if (dfs(maze, newX, newY, visited)) {
        return true;
      }
      visited[newX][newY] = false;
    }
  }
  return false;
};

let isSafe = function (maze, x, y, visited) {
  return x >= 0 && y >= 0 && x < N && y < N && !visited[x][y] && maze[x][y] === 1;
};

console.log(dfs(maze, 0, 0, visited));