const { expect } = require('chai')
const longestCommonPrefix = require('../longestCommonPrefix')

describe('longestCommonPrefix', () => {
  it('returns the longest common prefix among an array of strings', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).to.equal('fl')
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).to.equal('')
  })
})
