const { expect } = require('chai')
const countAndSay = require('../countAndSay')

describe('countAndSay', () => {
  it('given an integer n, returns the nth term of the count and say sequence', () => {
    expect(countAndSay(1)).to.equal(1)
    expect(countAndSay(4)).to.equal(1211)
  })
})
