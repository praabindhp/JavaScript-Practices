// Adjacency List
const adjacencyList = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
  };
  
  console.log("Adjacency List:");
  console.log(adjacencyList);
  
  // Adjacency Matrix
  const adjacencyMatrix = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ];
  
  console.log("Adjacency Matrix:");
  console.log(adjacencyMatrix);  