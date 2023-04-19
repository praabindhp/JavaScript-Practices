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

var longestZigZag = function(root) {
    let max = 0;
    
    const helper = (node, prev, length) => {
    
        if(node === null)
            return null;
        
        max = Math.max(max, length);
        
        helper(node.left, "l" , prev === "r" ? length + 1 : 1);
        helper(node.right, "r" , prev === "l" ? length + 1 : 1);
    }
        
    helper(root, "l", 0); 
    helper(root, "r", 0);
    
    return max;
};