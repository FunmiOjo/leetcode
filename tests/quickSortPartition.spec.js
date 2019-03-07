const { expect } = require('chai')
const { partition } = require('../quickSort')

describe('partition', () => {
  it('places all numbers greater than last number after it and all those less than after it', () => {
    const nums = [7, 2, 1, 6, 8, 5, 3, 4]
    partition(nums)
    expect(nums).to.deep.equal([2, 1, 3, 4, 8, 5, 7, 6])
  })
})
