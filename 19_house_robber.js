/*
19  House Robber

Concept: Dynamic Programming
Problem Statement

A robber cannot rob two adjacent houses. Determine the maximum money that can be stolen.

Input
[2, 7, 9, 3, 1]

Expected Output
12
*/

function rob(nums) {
    // Agar array khali hai
    if (nums.length === 0) {
        return 0;
    }
    
    // Agar sirf ek hi ghar hai
    if (nums.length === 1) {
        return nums[0];
    }
        
    // Hum sirf pichle 2 gharon ka record rakhenge memory bachane ke liye
    let prev2 = nums[0]; // 2 ghar peechhe ka max profit
    let prev1 = Math.max(nums[0], nums[1]); // 1 ghar peechhe ka max profit
    
    // Teesre ghar se shuru karke aage barho
    for (let i = 2; i < nums.length; i++) {
        // Do choices: ya toh pichla wala rakho, ya current + 2 ghar peechhe wala
        let currentMax = Math.max(prev1, prev2 + nums[i]);
        
        // Variables ko agle ghar ke liye update karo
        prev2 = prev1;
        prev1 = currentMax;
    }
    
    return prev1;
}

// --- Test Karo ---
const nums = [2, 7, 9, 3, 1];
console.log(rob(nums)); // Expected Output: 12