const { expect } = require('chai')
const symmetricBinaryTree = require('../symmetricBinaryTree')
const BinaryTreeNode = require('../BinaryTreeNode')

describe('symmetricBinaryTree', () => {
  it('checks whether a binary tree is symmetrical', () => {
    const a = new BinaryTreeNode(1)
    a.left = new BinaryTreeNode(2)
    a.right = new BinaryTreeNode(2)
    a.left.left = new BinaryTreeNode(3)
    a.left.right = new BinaryTreeNode(4)
    a.right.left = new BinaryTreeNode(4)
    a.right.right = new BinaryTreeNode(3)

    const b = new BinaryTreeNode(1)
    b.left = new BinaryTreeNode(2)
    b.right = new BinaryTreeNode(2)
    b.left.right = new BinaryTreeNode(3)
    b.right.right = new BinaryTreeNode(3)

    expect(symmetricBinaryTree(a)).to.equal(true)
    expect(symmetricBinaryTree(b)).to.equal(false)
  })
})
