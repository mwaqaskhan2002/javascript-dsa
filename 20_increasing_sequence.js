/*
20  Increasing Sequence
Concept: Advanced Dynamic Programming
Problem Statement
Find the length of the longest strictly increasing subsequence.
Input
[10, 9, 2, 5, 3, 7, 101, 18]
Expected Output
4

*/ 

function lengthOfLIS(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let dp = new Array(nums.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
    
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength;
}
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); 