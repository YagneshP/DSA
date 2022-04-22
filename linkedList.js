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

//travesal print linked list

// Iterative way

// function printLinkedList(head) {
//   // passing head as argument
//   let current = head;
//   //check if the current node is null
//   while (current !== null) {
//     console.log(current.value);
//     current = current.next;
//   }
// }

// Recursive way

function printLinkedList(head) {
  // base case
  if (head === null) return;
  console.log(head.value);
  printLinkedList(head.next);
}

printLinkedList(a);
