/*
08  Count Target Subarrays
Concept: Prefix Sum

Problem Statement
Count the number of continuous subarrays whose sum equals a given target.

Input
nums = [1, 2, 1, 2, 1]
target = 3

Expected Output
4
*/

/*
Function subarraySum(nums, target):
    
    1. Variables set karo:
       - currentSum = 0
       - count = 0
       - prefixSumMap = {}  // Hash Map / Object (yeh pichle sums yaad rakhega)
       
       // Special rule: 0 sum pehle se 1 baar mojood hai
       - prefixSumMap[0] = 1

    2. Array ke har number par loop chalao:
       FOR EACH num IN nums:
       
          // STEP A: Running total (Prefix sum) update karo
          - currentSum = currentSum + num

          // STEP B: Check karo ke kya (currentSum - target) map mein pehle se hai?
          - diff = currentSum - target
          
          - IF diff IS IN prefixSumMap:
                // Agar hai, toh jitni baar aaya hai utna count mein add kar lo
                - count = count + prefixSumMap[diff]

          // STEP C: Current sum ko map mein save ya update kar do
          - IF currentSum IS IN prefixSumMap:
                - prefixSumMap[currentSum] = prefixSumMap[currentSum] + 1
          - ELSE:
                - prefixSumMap[currentSum] = 1

    3. Total count return kar do:
       - RETURN count
*/

const nums = [1, 2, 1, 2, 1];
const target = 3;

function countSubArrays(nums, target){
    let currentSum = 0;
    let count = 0;
    let prefixSumMap = {};
    prefixSumMap[0] = 1;

    for (let n of nums) {

        currentSum = currentSum + n; 
        let diff = currentSum - target;

        if (diff in prefixSumMap) {
            count += prefixSumMap[diff];
        }

        if (currentSum in prefixSumMap) {
            prefixSumMap[currentSum] = prefixSumMap[currentSum] + 1;
        } else {
            prefixSumMap[currentSum] = 1;
        }

    }
    return count;
}

console.log(countSubArrays(nums, target));