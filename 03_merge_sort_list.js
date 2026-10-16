/*
03  Merge Sorted Lists
Concept: Linked List
Problem Statement
Given the heads of two sorted linked lists, merge them into one sorted linked list.


Input
List1: 1 → 3 → 5
List2: 2 → 4 → 6

Expected Output
1 → 2 → 3 → 4 → 5 → 6
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 1️⃣ Module: Chota node chunna aur us list ka pointer aage sarkanay ka kaam
function getNextNodeToMerge(list1, list2) {
  if (list1.val < list2.val) {
    return { selectedNode: list1, updatedList1: list1.next, updatedList2: list2 };
  } else {
    return { selectedNode: list2, updatedList1: list1, updatedList2: list2.next };
  }
}

// 2️⃣ Module: Node ko result list ke aage jorna aur current ko aage move karna
function attachNode(current, node) {
  current.next = node;
  return current.next; // Naya current return kar diya
}

// 3️⃣ Module: Agar koi list bach jaye, toh usay aakhri mein attach karna
function attachRemainingNodes(current, list1, list2) {
  current.next = (list1 !== null) ? list1 : list2;
}

// 4️⃣ Printer Module: List print karne ke liye
function printList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// 🌟 Main Function: Dono lists ko merge karne ka orchestrator
function mergeList(list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    // Modularity ka jaadu: Chota node aur updated lists hasil kiye
    let mergedData = getNextNodeToMerge(list1, list2);
    
    // Node attach kiya aur current ko aage sarka diya
    current = attachNode(current, mergedData.selectedNode);
    
    // Pointers update kiye
    list1 = mergedData.updatedList1;
    list2 = mergedData.updatedList2;
  }

  // Bachi hui list ko attach kar diya
  attachRemainingNodes(current, list1, list2);

  return dummy.next;
}

// --- Testing ---
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

console.log("Merged Sorted List:");
const mergedHead = mergeList(list1, list2);
printList(mergedHead); 
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 🎉
