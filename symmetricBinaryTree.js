/*
Prompt:
Write a function that checks whether a binary tree is symmetrical

*/
const areEqual = (node1, node2) => {
  if (node1 === null && node2 === null) {
    return true
  }
  if (node1 === null || node2 === null) {
    return false
  }

  return node1.val === node2.val
}

const checkSymmetry = (leftNode, rightNode) => {
  if (leftNode === null && rightNode === null) {
    return true
  }

  if (leftNode === null || rightNode === null) {
    return false
  }

  if (
    areEqual(leftNode.left, rightNode.right) &&
    areEqual(leftNode.right, rightNode.left)
  ) {
    return (
      checkSymmetry(leftNode.left, rightNode.right) &&
      checkSymmetry(leftNode.right, rightNode.left)
    )
  } else {
    return false
  }
}

const isSymmetric = root => {
  if (root === null) {
    return true
  }
  if (root.left === null && root.right === null) {
    return true
  }

  if (root.left === null || root.right === null) {
    return false
  }

  if (root.left.val === root.right.val) {
    return checkSymmetry(root.left, root.right)
  }

  return false
}

module.exports = isSymmetric
