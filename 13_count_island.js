/*
13  

Count Islands

Concept: DFS/BFS on Grid
Problem Statement
Count the number of disconnected islands in a binary matrix.

Input
[
    [1,1,0],
    [0,1,0],
    [1,0,1]
]

Expected Output
3
*/

// const grid = [
//   [1, 1, 0],
//   [0, 1, 0],
//   [1, 0, 1],
// ];

function exploreIsland(grid, r, c) {
  let rows = grid.length();
  let cols = grid.length[0];

  if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == "0") {
    return;
  }

  grid[r][c] = "0";

  exploreIsland(grid, r - 1, c); // Up
  exploreIsland(grid, r - 1, c); // Down
  exploreIsland(grid, r - 1, c); // Left
  exploreIsland(grid, r - 1, c); // Right
}

class Solution {
  // 1️⃣ Formula / Helper Module: DFS ke zariye connected land ko sink karna
  exploreIsland(grid, r, c) {
    let rows = grid.length;
    let cols = grid[0].length;

    // Base Case: Boundaries se bahar ya paani (0) milne par ruk jao
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      grid[r][c] == 0 ||
      grid[r][c] === "0"
    ) {
      return;
    }

    // Is land ko mark (sink) kar do taake dobara count na ho
    grid[r][c] = "0";

    // Chaaron directions mein explore karo (Upar, Neeche, Left, Right)
    this.exploreIsland(grid, r - 1, c); // Upar
    this.exploreIsland(grid, r + 1, c); // Neeche
    this.exploreIsland(grid, r, c - 1); // Left
    this.exploreIsland(grid, r, c + 1); // Right
  }

  // 2️⃣ Main Orchestrator Module: Grid par loop chala kar islands count karna
  numIslands(grid) {
    if (!grid || grid.length === 0) {
      return 0;
    }

    let rows = grid.length;
    let cols = grid[0].length;
    let islandCount = 0;

    // Poori grid par row aur column ka loop chalayenge
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Jab bhi zameen (1) milegi, ek naya island mil gaya!
        if (grid[r][c] == 1 || grid[r][c] === "1") {
          islandCount++;

          // Helper function ko bula kar iske sath jude saare 1s ko dooba do
          this.exploreIsland(grid, r, c);
        }
      }
    }

    return islandCount;
  }
}

// --- Testing ---
const solver = new Solution();
const grid = [
  [1, 1, 0],
  [0, 1, 0],
  [1, 0, 1],
];

console.log("Total Islands:", solver.numIslands(grid));