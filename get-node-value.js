/**
 * Problem : Get the value of the link node at given index
 */

/**
 * Approach :
 *  - Iterative :  Time O(n), Space O(1)
 *  - Recursive : Time O(n), Space O(n)
 *
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

//Iterative

const getValueIT = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) return current.value;
    count++;
    current = current.next;
  }
  return null;
};

console.log(getValueIT(a, 2));

// Recursive

const getValueRC = (head, index) => {
  //base case 1 : if head null return null
  if (head === null) return null;
  //base case 2 : we decrease index value by one for each call , when index = 0 return current value
  if (index === 0) return head.value;
  return getValueRC(head.next, index - 1);
};

console.log(getValueRC(a, 1));
