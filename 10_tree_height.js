/*
10  Tree Height
Concept: DFS
Problem Statement
Find the maximum depth of a binary tree.

Input
    1
   / \
  2   3
 /
4

Expected Output:
3
*/ 

class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function calculateMaxDepth(leftDepth, rightDepth){
    return 1 + Math.max(leftDepth, rightDepth);
}

function TreeHeight(node){
    if (node == null){
        return 0;
    }
    let leftDepth = TreeHeight(node.left);
    let rightDepth = TreeHeight(node.right);

    return calculateMaxDepth(leftDepth, rightDepth);
}

const root =  new Node(1, new Node(2, new Node(4), null), new Node(3));

console.log("Tree Height:", TreeHeight(root));


