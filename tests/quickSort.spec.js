const { expect } = require('chai')
const { quickSort } = require('../quickSort')

describe('quickSort', () => {
  it('sorts an array of numbers from largest to smallest in place', () => {
    const nums = [7, 2, 1, 6, 8, 5, 3, 4]
    quickSort(nums)
    expect(nums).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
