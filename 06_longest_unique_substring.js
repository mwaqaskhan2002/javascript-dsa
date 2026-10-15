/*
06  Longest Unique Substring
Concept: Sliding Window

Problem Statement
Find the length of the longest substring without repeating characters.

Input
"abcabcbb"

Expected Output
3
*/


/*
Function lengthOfLongestSubstring(s):
    
    1. Variables set karo:
       - left = 0                  (Rubber band ka pichla kona)
       - maxLen = 0                (Sabse bare unique tukray ka record)
       - seenCharacters = Set()    (Yeh yaad rakhega ke abhi khirki mein kya hai)

    2. Right pointer se poori string par loop chalao:
       FOR right FROM 0 TO length of s - 1:
       
          // STEP A: Agar character pehle se mojood hai, toh duplicate hatao!
          WHILE s[right] IS IN seenCharacters:
              - seenCharacters.remove(s[left])  // Piche wale character ko nikal do
              - left = left + 1                 // Left pointer ko aage sarka do

          // STEP B: Naya character shamil kar lo aur record check karo
          - seenCharacters.add(s[right])
          
          // Current rubber band ki length nikalo: (right - left + 1)
          - currentLen = (right - left + 1)
          
          // STEP C: Kya yeh naya record hai?
          - IF (currentLen > maxLen):
                maxLen = currentLen

    3. Aakhri record return kar do:
       - RETURN maxLen
*/


const s = "abcabcbb";

function lengthOfLongestSubstring(s){

    let left = 0;
    let max_length = 0;
    let seenCharacters = new Set();

    for (let right = 0; right < s.length; right++) {
        
        while (seenCharacters.has(s[right])) {
          seenCharacters.delete(s[left]);
          left += 1;
        }

        seenCharacters.add(s[right]);

        currentLen = (right - left + 1);
        
        if (currentLen > max_length) {
            max_length = currentLen
        }
    }
    return max_length
}

console.log(lengthOfLongestSubstring(s));

// OUTPUT: 3
