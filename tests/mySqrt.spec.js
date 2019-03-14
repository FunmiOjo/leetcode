const { expect } = require('chai')
const mySqrt = require('../mySqrt')

describe('mySqrt', () => {
  it('returns the integer portion of the square root of a given number', () => {
    expect(mySqrt(4)).to.equal(2)
    expect(mySqrt(8)).to.equal(2)
  })
})
