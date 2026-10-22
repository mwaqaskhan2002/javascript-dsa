/*
16  Combination Target

Concept: Backtracking

Problem Statement
Given a set of positive integers, find every combination that sums exactly to a target. Numbers may be reused.

Input
nums = [2, 3, 6, 7]
target = 7

Expected Output
[[2,2,3], [7]]

*/

/*
// 🌟 Main Function
Function combinationSum(nums, target):
    Set result = empty list
    
    // Helper function ko call karo (start index 0 se, target, aur khali path ke sath)
    Call backtrack(startIndex = 0, currentTarget = target, currentPath = [])
    
    RETURN result

End Function


Function backtrack(startIndex, currentTarget, currentPath):
    
    IF currentTarget == 0:
        Add a copy of currentPath to result
        RETURN
    END IF
    
    IF currentTarget < 0:
        RETURN
    END IF
    
    FOR i FROM startIndex TO length of nums - 1:

        Add nums[i] to currentPath
        
        Call backtrack(startIndex = i, currentTarget = currentTarget - nums[i], currentPath)
        
        Remove the last element from currentPath
        
    END FOR

End Function
*/

function combinationSum(nums, target) {
  let result = [];

  // Backtrack function ko andar define kiya taake 'result' aur 'nums' seedha access ho sakein
  function backtrack(startIndex, currentTarget, currentPath) {
    // Base Case 1: Target 0 ho gaya (Success!)
    if (currentTarget === 0) {
      result.push([...currentPath]); // ✅ Array ki copy push ki
      return;
    }

    // Base Case 2: Target negative ho gaya (Overshoot)
    if (currentTarget < 0) {
      return;
    }

    // Loop starting from startIndex
    for (let i = startIndex; i < nums.length; i++) {

      currentPath.push(nums[i]);

      backtrack(i, currentTarget - nums[i], currentPath); 

      currentPath.pop();
    }
  }

  backtrack(0, target, []);

  return result;
}


const nums = [2, 3, 6, 7];
const target = 7;

console.log(combinationSum(nums, target));
// Expected Output: [ [ 2, 2, 3 ], [ 7 ] ]