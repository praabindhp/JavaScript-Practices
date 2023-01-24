const adjacencyList = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
  };
  
  const visited = {};
  
  function DFS(vertex) {
    if (!visited[vertex]) {
      console.log(vertex);
      visited[vertex] = true;
      for (const neighbor of adjacencyList[vertex]) {
        DFS(neighbor);
      }
    }
  }
  
  console.log("DFS Traversal:");
  DFS("A");  