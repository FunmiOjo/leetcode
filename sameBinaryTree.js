/*
Prompt:
Write a function that checks whether two binary trees are structurally identical 
and have the same node values

Approach:
If two tree values are different, return false
If two tree values are the same, return what returns from two recursive calls
on the left and right nodes
*/
const isSameTree = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) {
    return true
  }

  if (
    (tree1 === null && tree2 !== null) ||
    (tree1 !== null && tree2 === null)
  ) {
    return false
  }
  if (tree1.val !== tree2.val) {
    return false
  } else {
    return (
      isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    )
  }
}

module.exports = isSameTree
