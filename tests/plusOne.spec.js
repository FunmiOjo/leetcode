const { expect } = require('chai')
const plusOne = require('../plusOne')

describe('plusOne', () => {
  it('adds one to the number represented by the digits and returns the output in array format', () => {
    expect(plusOne([1, 2, 3])).to.deep.equal([1, 2, 4])
  })

  it('handles carrying properly', () => {
    expect(plusOne([9, 9, 9])).to.deep.equal([1, 0, 0, 0])
  })
})
