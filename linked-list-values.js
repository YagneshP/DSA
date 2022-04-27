/** Problem
 * Return the Array with values which contains in each nodes of linked list [ Singally linked list]
 */

/**
 * Approach
 *
 * travsal -> Need a variable / pointer , Time = O(n) Space = O(n)
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

//iterative

const linkedListValues = (head) => {
  // need an array to store the values of node
  let values = [];
  let current = head; //start assign head to a variable

  while (current !== null) {
    //need to add node value to array
    values.push(current.value);
    //assign current to current.next
    current = current.next;
  }
  return values;
};

console.log(linkedListValues(a));
