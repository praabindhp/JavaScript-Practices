class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstPoint = (root) => {
    if (root === null) return;

    console.log(root.val);
    depthFirstPoint(root.left);
    depthFirstPoint(root.right);
};

//         A
//       /   \
//      B     C
//     / \     \
//    D   E     F

depthFirstPoint(a);

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