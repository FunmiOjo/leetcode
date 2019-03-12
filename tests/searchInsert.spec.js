const { expect } = require('chai')
const searchInsert = require('../searchInsert')

describe('searchInsert', () => {
  it('given sorted array and target, returns the index of the target if it is in the array', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).to.equal(2)
  })

  it('returns the index where the target would be inserted if the target is not in the array', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).to.equal(1)
    expect(searchInsert([1, 3, 5, 6], 7)).to.equal(4)
    expect(searchInsert([1, 3, 5, 6], 0)).to.equal(0)
  })
})
