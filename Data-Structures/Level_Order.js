class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    levelOrder() {
      if (!this.root) {
        return;
      }
  
      let queue = [this.root];
  
      while (queue.length) {
        let current = queue.shift();
        console.log(current.value);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    }
  }
  
  let tree = new BinaryTree();
  tree.root = new Node(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(5);
  
  tree.levelOrder();
  // Output: 1 2 3 4 5  