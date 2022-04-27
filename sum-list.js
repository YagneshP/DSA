/**
 * Problem Sum of all (singly)linked list values
 */

/**
 * Approach : traverse to list and accumulate to the sum
 * Iterative : Time O(n) ,Space: O(1)
 * Recursive : because of stack of function Space: O(n), Time O(n)
 */

//create Node class

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const a = new Node(3);
const b = new Node(6);
const c = new Node(7);
const d = new Node(9);

//create Linked list

a.next = b;
b.next = c;
c.next = d;

//Iterative

const sumLinkedListIT = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.value;
    current = current.next;
  }
  return sum;
};

console.log(sumLinkedListIT(a));

//Recursive

const sumLinkedListRC = (head) => {
  //base case current.next === null return 0
  if (head === null) return 0;
  return head.value + sumLinkedListRC(head.next);
};

console.log(sumLinkedListRC(a));
