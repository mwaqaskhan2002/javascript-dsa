/*
15  kth Largest

Concept: Heap / Priority Queue

Problem Statement

Find the kth
largest element in an unsorted array.

Input
nums = [5, 2, 9, 1, 7]
k = 2

Expected Output
7
*/

class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(element) {
        this.heap.push(element);
        this.heap.sort((a, b) => a - b); 
    }

    dequeue() {
        return this.heap.shift();
    }

    size() {
        return this.heap.length;
    }

    front() {
        return { element: this.heap[0] };
    }
}

function findKthLargest(nums, k) {
  const minHeap = new MinPriorityQueue(); // ✅ Capital 'M' kar diya

    for (const num of nums) {
        minHeap.enqueue(num); 
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    return minHeap.front().element;
}

const nums = [5, 2, 9, 1, 7];
const k = 2;

console.log(`The ${k}th largest element is: ${findKthLargest(nums, k)}`);