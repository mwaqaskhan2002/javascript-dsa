// 01  Pair Sum

// Concept: Arrays, Hash Map

// Problem Statement
// Given an array of integers and a target value, return the indices of two distinct elements whose sum equals the target.

// Input
// nums = [4, 9, 2, 7]
// target = 11

// Expected Output
// [0, 3]

/* 
====================================================
STEP 1 & 2: PROBLEM UNDERSTANDING & BRUTE FORCE
====================================================

Problem: Pair Sum (Two Sum)
Input: nums = [4, 9, 2, 7], target = 11

1. Problem Understanding:
   - Humein array mein se aise do numbers dhoondne hain jinka sum target (11) ke barabar ho.
   - Output mein un numbers ki values nahi balki unke **indices (positions)** return karne hain.
   - Example: 9 (index 1) + 2 (index 2) = 11  --> Output: [1, 2]
                OR
              4 (index 0) + 7 (index 3) = 11  --> Output: [0, 3]

2. Brute Force Logic (The Card Example / Two Loops):
   - Hum ek-ek kar ke har card (number) ko pakdeinge (`i` loop).
   - Uske aage wale baaki sabhi numbers ke sath usko jod kar check karenge (`j` loop).
   - Jaise hi `nums[i] + nums[j] == target` match ho jaye, unke indices `[i, j]` return kar denge.

   * Note: Yeh sab se simple aur working tareeqa hai, 
     Lekin isme do loops chalne ki wajah se time complexity zyada hoti hai O(n^2).
     Iske baad hum isko optimize (fast) karna seekhenge!

     
====================================================
*/
// Brute Force Problem

// nums = [4, 9, 2, 7, 8, 5, 1];
// target = 15;

// function twoSums(nums, target) {
//   // 1st loop yahan aayega (`i` ke liye)
//   for (let i = 0; i < nums.length; i++) {
//     // 2nd loop yahan aayega (`j` ke liye)
//     for (let j = 0; j < nums.length; j++) {
//       // Condition: Kya nums[i] + nums[j] == target hai?
//       const element = nums[i] + nums[j];

//       // Agar haan, toh [i, j] return kar do!
//       if (element == target) {
//         return [i, j];
//       }
//     }
//   }
// }
// // Function call with arguments

// Psudeo Code
// const result = twoSums(nums, target);
// console.log("Target indices:", result);

// 1. Ek khali object banao (Diary): const map = {};
// 2. Ek single loop chalao i = 0 se nums.length tak:
//     a. currentNumber = nums[i]
//     b. complement = target - currentNumber

//     c. CHECK: Kya complement 'map' ke andar pehle se maujood hai?
//        - Agar HAAN: Iska matlab pair mil gaya! Return [map[complement], i]
//        - Agar NAHI: Toh current number ko map mein save kar do -> map[currentNumber] = i;


// Optimized Solution for Time Complexity

nums = [4, 9, 2, 7];
target = 11;

function TwoSums(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {

    const current_number = nums[i];
    const complement = target - current_number;

    if (complement in map) {
      return [map[complement], i]; 
    } else {
      map[current_number] = i;
    }
  }

  return map;
}

const result = TwoSums(nums, target);
console.log("Target indices:", result);

/* Output:

Target indices: [ 1, 2 ]

*/

/*
Another One if we want to print all the pairs in the code 
*/

// nums = [4, 9, 2, 7];
// target = 11;

// function TwoSums(nums, target) {
//   const allPairs = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       // Agar sum target ke barabar ho
//       if (nums[i] + nums[j] === target) {
//         // Rukna nahi hai, balki result box mein daal dena hai!
//         allPairs.push([i, j]);
//       }
//     }
//   }
//   return allPairs;
// }

// const result = TwoSums(nums, target);
// console.log("All matching indices:", result);

/* Output:
All matching indices: [ [ 0, 3 ], [ 1, 2 ] ]
*/


/* 
====================================================
OPTIMIZED PAIR SUM (TWO SUM) - Final Version
Time Complexity: O(n) - Single loop, super fast!
Space Complexity: O(n) - Using a Hash Map (Diary)
====================================================
*/

// const nums = [4, 9, 2, 7];
// const target = 11;

// function twoSumOptimized(nums, target) {
//   // 1. "Magic Diary" (Object) to store numbers and their indices as we see them
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i];
    
//     // 2. Find the complement needed to reach the target
//     const complement = target - currentNumber;

//     // 3. Check if the complement already exists in our diary
//     if (complement in map) {
//       // Found it! Return the saved index of the complement and our current index `i`
//       return [map[complement], i];
//     }

//     // 4. If not found, save the current number and its index into the diary and move on
//     map[currentNumber] = i;
//   }
// }

// // Function execution
// const result = twoSumOptimized(nums, target);
// console.log("Optimized Target Indices:", result); 
// Output: [1, 2] (Kyunkii nums[1] (9) + nums[2] (2) = 11)