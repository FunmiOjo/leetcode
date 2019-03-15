const { expect } = require('chai')
const sameBinaryTree = require('../sameBinaryTree')
const BinaryTreeNode = require('../BinaryTreeNode')
describe('sameBinaryTree', () => {
  it('checks whether two binary trees are structurally indentical and have the same node values', () => {
    const a1 = new BinaryTreeNode(1)
    a1.left = new BinaryTreeNode(2)
    a1.right = new BinaryTreeNode(3)
    const a2 = new BinaryTreeNode(1)
    a2.left = new BinaryTreeNode(2)
    a2.right = new BinaryTreeNode(3)

    const b1 = new BinaryTreeNode(1)
    b1.left = new BinaryTreeNode(2)
    const b2 = new BinaryTreeNode(1)
    b2.right = new BinaryTreeNode(2)

    const c1 = new BinaryTreeNode(1)
    c1.left = new BinaryTreeNode(2)
    c1.right = new BinaryTreeNode(1)
    const c2 = new BinaryTreeNode(1)
    c2.left = new BinaryTreeNode(1)
    c2.right = new BinaryTreeNode(2)

    expect(sameBinaryTree(a1, a2)).to.equal(true)
    expect(sameBinaryTree(b1, b2)).to.equal(false)
    expect(sameBinaryTree(c1, c2)).to.equal(false)
  })
})
