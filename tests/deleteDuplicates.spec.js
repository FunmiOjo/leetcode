const { expect } = require('chai')
const deleteDuplicates = require('../deleteDuplicates')
const ListNode = require('../ListNode')

describe('deleteDuplicates', () => {
  it('removes duplicates from a sorted singly linked list and returns the list', () => {
    const list1 = new ListNode(1)
    const otherList1NodeValues = [1, 2]
    let currentNode = list1
    otherList1NodeValues.forEach(value => {
      currentNode.next = new ListNode(value)
      currentNode = currentNode.next
    })

    const list1Set = new ListNode(1)
    list1Set.next = new ListNode(2)

    const list2 = new ListNode(1)
    let currentNode2 = list2
    const otherList2Values = [1, 2, 3, 3]
    otherList2Values.forEach(value => {
      currentNode2.next = new ListNode(value)
      currentNode2 = currentNode2.next
    })

    const list2Set = new ListNode(1)
    const list2SetValues = [2, 3]
    let currentNode2Set = list2Set
    list2SetValues.forEach(value => {
      currentNode2Set.next = new ListNode(value)
      currentNode2Set = currentNode2Set.next
    })

    expect(deleteDuplicates(list1)).to.deep.equal(list1Set)
    //expect(deleteDuplicates(list2)).to.deep.equal(list2Set)
  })
})
