/*
Prompt:
Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two
lists.

Approach:
Add pointer to head of each list.
Make a dummy head, place pointer cur on that head and build new list off that
Take the lesser of the nodes of each list and append it to the dummy head,
advance cur to that node and advance that list's pointer to the next node
Continue comparing between the lists, appending the lesser node to cur
*/

const mergeTwoLists = (l1, l2) => {
  const dummyHead = { val: 'dummyHead', next: null }
  let currentResultNode = dummyHead
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      currentResultNode.next = l2
      return dummyHead.next
    }

    if (l2 === null) {
      currentResultNode.next = l1
      return dummyHead.next
    }

    if (l1.val <= l2.val) {
      currentResultNode.next = l1
      currentResultNode = currentResultNode.next
      l1 = l1.next
    } else {
      currentResultNode.next = l2
      currentResultNode = currentResultNode.next
      l2 = l2.next
    }
  }

  return dummyHead.next
}

/*
Sources:
Back to Back SWE: https://www.youtube.com/watch?v=GfRQvf7MB3k
*/

module.exports = mergeTwoLists
