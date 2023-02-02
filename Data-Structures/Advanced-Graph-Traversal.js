class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1);
    }
  
    bfs(startVertex) {
      let visited = new Map();
      for (let [vertex] of this.adjList) {
        visited.set(vertex, false);
      }
  
      let queue = [];
      queue.push(startVertex);
      visited.set(startVertex, true);
  
      while (queue.length) {
        let currentVertex = queue.shift();
        console.log(currentVertex);
  
        let neighbors = this.adjList.get(currentVertex);
        for (let neighbor of neighbors) {
          if (!visited.get(neighbor)) {
            visited.set(neighbor, true);
            queue.push(neighbor);
          }
        }
      }
    }
  
    dfs(startVertex, visited = new Map()) {
      visited.set(startVertex, true);
      console.log(startVertex);
  
      let neighbors = this.adjList.get(startVertex);
      for (let neighbor of neighbors) {
        if (!visited.get(neighbor)) {
          this.dfs(neighbor, visited);
        }
      }
    }
  }
  
  let graph = new Graph();
  
  // Add vertices
  ["A", "B", "C", "D", "E"].forEach(vertex => {
    graph.addVertex(vertex);
  });
  
  // Add edges
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  
  // BFS starting from vertex A
  console.log("BFS: ");
  graph.bfs("A");
  
  // DFS starting from vertex A
  console.log("DFS: ");
  graph.dfs("A");  