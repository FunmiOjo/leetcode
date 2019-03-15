/*
Prompt:
Given a sorted linked list, delete all duplicates such that each
element only appears once.

Approach:
For each node, check if the one after it has the same value
If it does, look for the next original node and delete the nodes in-between
*/
const deleteDuplicates = head => {
  if (head === null) {
    return null
  }
  let currentNode = head

  while (currentNode !== null) {
    if (currentNode.next !== null) {
      if (currentNode.next.val === currentNode.val) {
        let differentValueNode = currentNode.next
        while (
          differentValueNode !== null &&
          differentValueNode.val === currentNode.val
        ) {
          differentValueNode = differentValueNode.next
        }
        currentNode.next = differentValueNode
      }
    }
    currentNode = currentNode.next
  }
  return head
}

module.exports = deleteDuplicates
