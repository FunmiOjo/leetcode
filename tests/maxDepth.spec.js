const { expect } = require('chai')
const maxDepth = require('../maxDepth')
const BinaryTreeNode = require('../BinaryTreeNode')

describe('maxDepth', () => {
  it('given a binary tree, finds its maximum depth', () => {
    const tree = new BinaryTreeNode(3)
    tree.left = new BinaryTreeNode(9)
    tree.right = new BinaryTreeNode(20)
    let currentNode = tree.right
    currentNode.left = new BinaryTreeNode(15)
    currentNode.right = new BinaryTreeNode(7)
    expect(maxDepth(tree)).to.equal(3)
  })
})
