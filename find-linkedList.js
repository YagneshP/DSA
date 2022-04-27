/**
 * Problem : Find the target value in linked list if it is there return true, if not return False
 */

/**
 * Approach : travesal
 * Iterative : Time : O(n), Space : O(1)
 * Recurcive : Time : O(n), Space : O(n)
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

const findValueIT = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.value === target) return true;
    current = current.next;
  }
  return false;
};

console.log(findValueIT(a, "G"));

//Recursive

const findValueRC = (head, target) => {
  //base case 2 : if value not found return false that means head is null
  if (head === null) return false;
  //base case 1 : if value found return true
  if (head.value === target) return true;
  return findValueRC(head.next, target);
};

console.log(findValueRC(a, "G"));
