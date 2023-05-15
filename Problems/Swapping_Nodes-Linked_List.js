/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var swapNodes = function(head, k) {
    let node1, node2;
    
    const traverse = (node, count = 1) => {
        if (!node) {
            return 1;
        }
        if (count === k) {
            node1 = node;
        }
        
        const index = traverse(node.next, count + 1);
        
        if (index === k) {
            node2 = node;
        }
        
        return index + 1;
    }
    
    traverse(head);
    
    if (node1 && node2) {
        [node1.val, node2.val] = [node2.val, node1.val];
    }
       
    return head;
};