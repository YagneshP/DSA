/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let prevNode = new ListNode(0);
  let headNode = prevNode;
  //traverse through list
  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // traversing throug linkedlist
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }

    let sum = val1 + val2 + carry; // donot have leading 0  for value in linknode so we can max 18 (val 0 - 9)

    carry = sum > 9 ? 1 : 0;
    let newValue = sum % 10;
    let currNode = new ListNode(newValue);
    prevNode.next = currNode;
    prevNode = currNode;
  }
  return headNode.next;
};
