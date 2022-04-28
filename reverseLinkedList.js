/**
 * Problem reverse the list
 */

/**
 * Approach : take head -> head.next -> null , head.current.next = prev
 */

//create Node class

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

//create Linked list

a.next = b;
b.next = c;
c.next = d;

const reverseLinkIt = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev; // prev will be the head
};

const reverseLinkRC = (head, prev = null) => {
  //base case
  if (head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseLinkRC(next, head);
};

console.log(reverseLinkRC(a));
