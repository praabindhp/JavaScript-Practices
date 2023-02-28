function findDuplicateSubtrees(root) {
    // Create a hash map to store the subtrees and their counts
    const map = new Map();
    // Create an array to store the duplicate subtrees
    const result = [];
  
    // Traverse the binary tree recursively
    function traverse(node) {
      // If the node is null, return a special symbol to represent it
      if (!node) return '#';
  
      // Construct a string representation of the subtree rooted at the current node
      const subtree = `${node.val},${traverse(node.left)},${traverse(node.right)}`;
      // Get the count of the subtree from the hash map, default to 0 if not found
      const count = map.get(subtree) || 0;
  
      // If the count is 1, it means we've seen this subtree before and it's a duplicate
      if (count === 1) {
        // Add the current node to the result array
        result.push(node);
      }
  
      // Increment the count of the subtree in the hash map
      map.set(subtree, count + 1);
  
      // Return the string representation of the subtree
      return subtree;
    }
  
    // Start the traversal from the root node
    traverse(root);
  
    // Return the array of duplicate subtrees
    return result;
  }