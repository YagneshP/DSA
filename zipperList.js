/**
 * Problem : two lists :
 *            a -> b -> c -> d
 *            p -> q -> r
 *
 *  convert them in to one : a -> p -> b -> q -> c -> r -> d
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

//create Linked list 1

a.next = b;
b.next = c;
c.next = d;

const p = new Node("P");
const q = new Node("Q");
//create Linked list 2
p.next = q;

//iterative way

const zipperListIT = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2;
  let tail = head1;
  let count = 0;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head1;
};

// Recursive way

const zipperListRC = (head1, head2) => {
  //base case 1: when any of list null return null
  if (head1 === null && head2 === null) return null;
  //base case 2 : either null return other
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let next1 = head1.next;
  let next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListRC(next1, next2);
  return head1;
};

function printLinkedList(head) {
  // base case
  if (head === null) return;
  console.log(head.value);
  return printLinkedList(head.next);
}

printLinkedList(zipperListRC(a, p));
