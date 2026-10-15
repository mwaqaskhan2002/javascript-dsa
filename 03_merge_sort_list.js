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
// List 1: 1 -> 3 -> 5
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
// List 2: 2 -> 4 -> 6
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

function mergeList(list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // 👉 Correction 2: Agar koi list bach gayi hai, usay aage jod do
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // 👉 Correction 3: Dummy ke aage wali poori list return kardo
  return dummy.next;
}

function printList(head) {
  let current = head;
  let result = [];

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  console.log(result.join(" -> "));
}

// Ab isko aise use karo:
const mergedHead = mergeList(list1, list2);
printList(mergedHead);

