class Node{
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function processCurrentLevel(queue, currentLevelValues){
    let current_node = queue.shift();
    currentLevelValues.push(current_node.val)

    if (current_node.left != null) {
        queue.push(current_node.left());
    }
    if (current_node.right != null) {
        queue.push(current_node.right());
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
        final_result(currentLevelValues);
    }

    return final_result;
}