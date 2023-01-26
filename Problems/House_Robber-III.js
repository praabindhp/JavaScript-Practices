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

var rob = function(root, memo = {}, key = '') {
    if(root === null) return 0;
    
    if(memo[key] !== undefined){
        return memo[key]
    }
    
    const ifNotRobCurr = rob(root.left, memo, key + '0') + rob(root.right, memo, key + '1');
    const ifRobCurr = root.val + (root.left ? rob(root.left.left, memo, key + '00') + rob(root.left.right, memo, key + '01') : 0) + (root.right ? rob(root.right.left, memo, key + '10') + rob(root.right.right, memo, key + '11') : 0)
    
    memo[key] = Math.max(ifNotRobCurr, ifRobCurr);
    
    return memo[key];
};