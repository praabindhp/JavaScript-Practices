function breadthFirstSearch(startNode, targetNode) {
    let queue = [startNode];
    let visited = new Set();
    visited.add(startNode);
  
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode === targetNode) {
        return true;
      }
      for (let neighbor of currentNode.neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    return false;
  }