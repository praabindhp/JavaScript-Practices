const maze = [  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];

const start = [0, 0];
const end = [3, 3];

const findPath = (maze, start, end) => {
  const path = [];
  const visited = {};
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    path.push(current);

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    const row = current[0];
    const col = current[1];

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (const direction of directions) {
      const newRow = row + direction[0];
      const newCol = col + direction[1];

      if (newRow >= 0 && newRow < maze.length && newCol >= 0 && newCol < maze[0].length && maze[newRow][newCol] === 1 && !visited[`${newRow},${newCol}`]) {
        visited[`${newRow},${newCol}`] = true;
        queue.push([newRow, newCol]);
      }
    }
  }

  return null;
}
console.log(findPath(maze, start, end));