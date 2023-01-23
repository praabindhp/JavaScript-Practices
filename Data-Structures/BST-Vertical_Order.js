class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    verticalOrder() {
      if (!this.root) {
        return;
      }
  
      let map = new Map();
      let queue = [[this.root, 0]];
  
      while (queue.length) {
        let [current, hd] = queue.shift();
        if (!map.has(hd)) {
          map.set(hd, []);
        }
        map.get(hd).push(current.value);
        if (current.left) {
          queue.push([current.left, hd - 1]);
        }
        if (current.right) {
          queue.push([current.right, hd + 1]);
        }
      }
  
      let keys = Array.from(map.keys()).sort();
      for (let key of keys) {
        console.log(map.get(key));
      }
    }
  }
  
  let bst = new BinarySearchTree();
  bst.root = new Node(10);
  bst.root.left = new Node(5);
  bst.root.right = new Node(15);
  bst.root.left.left = new Node(3);
  bst.root.left.right = new Node(8);
  bst.root.right.left = new Node(12);
  bst.root.right.right = new Node(20);
  
  bst.verticalOrder();
  // Output: [3] [5, 8] [10, 12, 15, 20]
  