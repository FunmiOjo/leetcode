/*
Prompt:
Write a function that takes a binary tree and returns its maximum depth

Approach:
Set max depth, traverse depth first, incrementing depth each time and comparing to max
Replace max with current depth
*/
const maxDepth = tree => {
  let max = 0
  const traverse = (node, depth) => {
    if (node === null) {
      return
    }
    const newDepth = depth + 1
    if (newDepth > max) {
      max = newDepth
    }
    traverse(node.left, newDepth)
    traverse(node.right, newDepth)
  }
  traverse(tree, 0)
  return max
}

module.exports = maxDepth
