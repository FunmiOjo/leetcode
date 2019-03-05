const { expect } = require('chai')
const mergeTwoLists = require('../mergeTwoLists')
const ListNode = require('../ListNode')

describe('mergeTwoLists', () => {
  let l1, l2, l1Second, l1Third, l2Second, l2Third
  before(() => {
    l1 = new ListNode(1)
    l1Second = new ListNode(2)
    l1.next = l1Second
    l1Third = new ListNode(4)
    l1Second.next = l1Third

    l2 = new ListNode(1)
    l2Second = new ListNode(3)
    l2.next = l2Second
    l2Third = new ListNode(4)
    l2Second.next = l2Third
  })

  it('splices together two lists and returns the new list', () => {
    const mergedList = mergeTwoLists(l1, l2)
    let currentNode = mergedList
    expect(currentNode.val).to.equal(1)
    currentNode = currentNode.next
    expect(currentNode.val).to.equal(1)
    currentNode = currentNode.next
    expect(currentNode.val).to.equal(2)
    currentNode = currentNode.next
    expect(currentNode.val).to.equal(3)
    currentNode = currentNode.next
    expect(currentNode.val).to.equal(4)
    currentNode = currentNode.next
    expect(currentNode.val).to.equal(4)
  })
})
