/*
11  Level Order Traversal
Concept: BFS

Problem Statement
Return the nodes of a binary tree level by level.

Input
      1
    /   \
   2     3
  / \
 4   5

Expected Output:
[[1], [2,3], [4,5]]
*/


class Node{
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function processCurrentLevel(queue, currentLevelValues){
    let levelSize = queue.length; 

    for (let i = 0; i < levelSize; i++) {
      let current_node = queue.shift();
      currentLevelValues.push(current_node.val);

      if (current_node.left != null) {
        queue.push(current_node.left);
      }
      if (current_node.right != null) {
        queue.push(current_node.right);
      }
    }
}

function levelOrder(root){
    if (root == null) {
        return [];
    }

    let final_result = [];
    let queue = [root];

    while (queue.length > 0) {
        let currentLevelValues = []
        processCurrentLevel(queue, currentLevelValues);
        final_result.push(currentLevelValues);
    }

    return final_result;
}

const root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3));

console.log("Level Order Traversal:", JSON.stringify(levelOrder(root)));
