/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = function(lists) {
    const queue = new MinPriorityQueue({ priority: x => x.val })
  
    for (const head of lists) {
      if (head) {
        queue.enqueue(head)
      }
    }
  
    let result = new ListNode()
    const head = result
  
    while (!queue.isEmpty()) {
      const { val, next } = queue.dequeue().element
  
      result.next = new ListNode(val)
      result = result.next
  
      if (next) {
        queue.enqueue(next)
      }
    }
  
    return head.next
  }