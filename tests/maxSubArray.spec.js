const { expect } = require('chai')
const maxSubArray = require('../maxSubArray')

describe('maxSubArray', () => {
  it('given an array of integers, finds the contiguous subarray with the largest sum and returns that sum', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6)
  })
})
