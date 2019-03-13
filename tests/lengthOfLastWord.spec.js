const { expect } = require('chai')
const lengthOfLastWord = require('../lengthOfLastWord')

describe('lengthOfLastWord', () => {
  it('returns the length of the last word in a given string', () => {
    expect(lengthOfLastWord('Hello World')).to.equal(5)
    expect(lengthOfLastWord('')).to.equal(0)
  })
})
