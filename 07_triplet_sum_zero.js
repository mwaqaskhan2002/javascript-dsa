/*
07  Triplet Sum Zero
Concept: Sorting + Two Pointers

Problem Statement
Find all unique triplets whose sum equals zero.

Input
[-1, 0, 1, 2, -1, -4]

Expected Output
[[-1,-1,2], [-1,0,1]]
*/

/*
Function threeSum(nums):
    
    1. Sabse pehle array ko sort karo (chote se bare ki taraf):
       - SORT nums in ascending order

    2. Ek khali result array banao jisme triplets save honge:
       - result = []

    3. Anchor (`i`) ke liye loop chalao:
       FOR i FROM 0 TO length of nums - 2:
       
          // DUPLICATE CHECK (Anchor ke liye):
          // Agar current number pichle number jaisa hai, toh skip kardo taake repeat na ho
          IF i > 0 AND nums[i] === nums[i - 1]:
              CONTINUE

          4. Two Pointers set karo:
             - left = i + 1
             - right = length of nums - 1

          5. Jab tak left pointer right se piche hai:
             WHILE left < right:
                 
                 - currentSum = nums[i] + nums[left] + nums[right]

                 // KES 1: Exact Zero mil gaya! 🎉
                 IF currentSum === 0:
                     - result.push([nums[i], nums[left], nums[right]])
                     
                     // Pointers ko aage-peeche karo aur duplicates skip karo
                     - left = left + 1
                     - right = right - 1
                     
                     // Duplicate left values ko skip karne ke liye:
                     WHILE left < right AND nums[left] === nums[left - 1]:
                         left = left + 1
                         
                     // Duplicate right values ko skip karne ke liye:
                     WHILE left < right AND nums[right] === nums[right + 1]:
                         right = right - 1

                 // KES 2: Sum negative hai (Bohat chota hai, bari value chahiye)
                 ELSE IF currentSum < 0:
                     - left = left + 1

                 // KES 3: Sum positive hai (Bohat bara hai, choti value chahiye)
                 ELSE:
                     - right = right - 1

    6. Aakhir mein saare triplets return kar do:
       - RETURN result

*/
const nums = [-1, 0, 1, 2, -1, -4];

function threeSums(num){
    nums.sort((a, b) => a - b);
    let result = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let left = i + 1;
        let right = nums.length - 1

        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right]

            if (currentSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left += 1;
                right -= 1;

                while (left < right && nums[left] === nums[left - 1]) {
                    left += 1
                }
                
                while (left < right && nums[right] === nums[right + 1]) {
                    right -= 1;
                }
            }

            else if(currentSum < 0){
                left += 1;
            }

            else{
                right -= 1;
            }
        }
    }
    return result;
}

console.log(threeSums(nums));

// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]