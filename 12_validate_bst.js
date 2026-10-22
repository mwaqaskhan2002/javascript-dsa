/*12  
Validate BST

Concept: Binary Search Tree

Problem Statement
Determine whether a binary tree satisfies BST properties.

Input
  5
 / \
3   7

Expected Output
true
*/

/*
Function validateRange(node, minVal, maxVal):
  
    IF node IS NULL:
        RETURN true
    END IF

    IF node.val <= minVal OR node.val >= maxVal:
        RETURN false
    END IF

    SET isLeftValid = validateRange(node.left, minVal, node.val)
    SET isRightValid = validateRange(node.right, node.val, maxVal)
    RETURN isLeftValid AND isRightValid
End Function

Function isValidBST(root):
    RETURN validateRange(root, -Infinity, +Infinity)
End Function
*/

class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function validateRange(node, minVal, maxVal) {
  if (node == null) {
    return true;
  }

  if (node.val <= minVal || node.val >= maxVal) {
    return false;
  }

  let isLeftValid = validateRange(node.left, minVal, node.val);
  let isRightValid = validateRange(node.right, node.val, maxVal);

  return isLeftValid && isRightValid;
}

function isValidBST(root) {
  return validateRange(root, -Infinity, +Infinity);
}

const root = new Node(5, new Node(3), new Node(7));
console.log("Is Valid BST?", isValidBST(root));