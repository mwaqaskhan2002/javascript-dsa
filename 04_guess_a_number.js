/*
04  Guess the Number
Concept: Binary Search
Problem Statement
Given a sorted array and a target number, return its index or -1 if it doesn't exist.

Input
nums = [2, 4, 7, 9, 12, 18]
target = 9

Expected Output
3
*/

/*
const nums = [2, 4, 7, 9, 12, 18];
const target = 9;

function binarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } 
        else if (nums[mid] < target) {
            left = mid + 1;
        } 
        else {
            right = mid - 1; 
        }
    }
    return -1;
}
console.log(binarySearch(nums, target));

OUTPUT: 3

OR

const nums = [2, 4, 7, 9, 12, 18];
const target = 9;

function binarySearch(nums, target){
    let right = 0;
    let left = nums.length - 1;

    while (left >= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } 
        else if (nums[mid] < target) {
            right = mid - 1;
        } 
        else {
            left = mid + 1; 
        }
    }
    return -1;
}

console.log(binarySearch(nums, target));

OUTPUT: 3

*/

const nums = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 10;

function binarySearch(nums, target) {
  let left = 0; 
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; 
    } else if (nums[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }
  return -1; 
}

const result = binarySearch(nums, target);

if (result === -1) {
  console.log("Target is not available in the array!");
} else {
  console.log(`Target found! Index number: ${result}`);
}