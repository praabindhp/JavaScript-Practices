/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function detectCycle(head) {
    if(!head || head.val === 100500)
        return head;

    head.val = 100500;

    return detectCycle(head.next);
};