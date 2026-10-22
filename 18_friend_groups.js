/* 
18  Friend Groups
Concept: Union-Find (DSU)

Problem Statement
Given friendships between people, determine how many disconnected friend groups exist.

Input
People = 5

Friendships:
(0,1)
(1,2)
(3,4)
Expected Output
2
*/

function countFriendGroups(n, friendships) {
  let parent = [];
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  let count = n;

  function find(i) {
    if (parent[i] === i) {
      return i;
    }

    return (parent[i] = find(parent[i]));
  }

  function find(i) {
    if (parent[i] === i) {
      return i;
    }

    return (parent[i] = find(parent[i]));
  }

  function union(i, j) {
    let rootI = find(i);
    let rootJ = find(j);

    // Agar dono ke roots alag hain, matlab woh alag groups mein thay
    if (rootI !== rootJ) {
      parent[rootI] = rootJ; // Ek ko doosre ke under jod do
      count--; // Jab do alag groups judte hain, total groups 1 kam ho jate hain
    }
  }

  for (const [u, v] of friendships) {
    union(u, v);
  }

  return count;
}

const people = 5;
const friendships = [
  [0, 1],
  [1, 2],
  [3, 4],
];

console.log(
  `Total disconnected friend groups: ${countFriendGroups(people, friendships)}`,
);