/*
09  Reverse Linked List
Concept: Linked List

Problem Statement
Reverse a singly linked list.

Input
1 → 2 → 3 → 4

Expected Output
4 → 3 → 2 → 1
*/

/*
// 1️⃣ Module: Agle node ka pata secure karna
Function GetNextNode(current):
    Return current.next

// 2️⃣ Module: Zanjeer ki direction ulta dena
Function ReversePointer(current, prev):
    current.next = prev

// 3️⃣ Module: Pointers ko ek kadam aage sarkanay ka kaam
Function SlidePointers(current, nextNode):
    // Naya prev ab current ban jayega, aur naya current nextNode ban jayega
    Return { newPrev: current, newCurrent: nextNode }

// 🌟 Main Module: Saare modules ko jor kar list reverse karna
Function ReverseList(head):
    Set prev = null
    Set current = head

    WHILE current IS NOT null:
        // Har chota kaam apne specific module ko de diya
        Set nextNode = GetNextNode(current)
        
        ReversePointer(current, prev)
        
        Set shifted = SlidePointers(current, nextNode)
        Set prev = shifted.newPrev
        Set current = shifted.newCurrent
    END WHILE

    // Jab loop khatam ho, toh 'prev' naya head ban chuka hoga
    RETURN prev

*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function GetNextNode(current) {
  return current.next;
}
function ReversePointer(current, prev) {
  current.next = prev;
}

function SlidePointers(current, nextNode) {
  return { newPrev: current, newCurrent: nextNode };
}

function PrintLinkedList(head) {
  let curr = head;
  let result = [];
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join(" -> "));
}

function ReverseList(head) {
  let prev = null;
  let current = head;

  while (current != null) {
    let nextNode = GetNextNode(current);

    ReversePointer(current, prev);

    const shifted = SlidePointers(current, nextNode);

    prev = shifted.newPrev;
    current = shifted.newCurrent;
  }
  return prev;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log("Original List:");
PrintLinkedList(head); // Output: 1 -> 2 -> 3 -> 4

let reversedHead = ReverseList(head);

console.log("Reversed List:");
PrintLinkedList(reversedHead);