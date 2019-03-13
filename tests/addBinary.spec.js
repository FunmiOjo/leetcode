const { expect } = require('chai')
const addBinary = require('../addBinary')

describe.only('addBinary', () => {
  it('adds two binary strings and returns the sum as a binary string', () => {
    expect(addBinary('11', '1')).to.equal('100')
    expect(addBinary('1010', '1011')).to.equal('10101')
  })
})
