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

//         A
//       /   \
//      B     C
//     / \     \
//    D   E     F

const depthFirstPoint = (root) => {
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current.val);

        // Add Currents Children To Top Of Stack
        if (current.right !== null) {
            stack.push(current.right);
        }

        if (current.left !== null) {
            stack.push(current.left);
        }
    }
}; // O(n) Time, O(n) Space

depthFirstPoint(a);