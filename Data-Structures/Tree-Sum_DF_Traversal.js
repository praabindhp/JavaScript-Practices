class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const sumTree = (root) => {
    if (root === null) return 0;
    return sumTree(root.left) + root.val + sumTree(root.right);
};

//         3
//       /   \
//      2     7
//     / \     \
//    4  -2     5

console.log(sumTree(a));

// Output

// A
// B
// D
// E
// C
// F

// Operations

// Pre-Order : Self, Left. Right
// Post-Order : Left, Right, Self
// In-Order : Left, Self, Right