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

const postOrder = (root) => {
    if (root === null) return;

    postOrder(root.left);
    console.log(root.val);
    postOrder(root.right);
};

//         A
//       /   \
//      B     C
//     / \     \
//    D   E     F

postOrder(a);

// Output

// D
// B
// E
// A
// C
// F