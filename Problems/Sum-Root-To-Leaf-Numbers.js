/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumNumbers = function (root) {
    // Declare a total
    let total = 0;

    // DFS with node and sum
    let dfs = (node, sum) => {
        // If the node is a leaf, "shift", add, and sum to total
        if (!node.left && !node.right) total += sum * 10 + node.val;
        else { // If not a leaf...
            // ...and has a left child,
            // DFS on the left side after "shifting" by one place
            if (node.left) dfs(node.left, sum * 10 + node.val);
            // ...and has a right child,
            // DFS on the right side after "shifting" by one place
            if (node.right) dfs(node.right, sum * 10 + node.val);
        }
    }
    
    // Call on root with current sum 0
    dfs(root, 0);

    // Return answer
    return total;
};