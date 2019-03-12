const { expect } = require('chai')
const strStr = require('../strStr')

describe('strStr', () => {
  it('returns the index of the first occurrence of the given needle string in the given haystack string', () => {
    expect(strStr('hello', 'll')).to.equal(2)
  })

  it('returns -1 if the needle does not appear in the haystack', () => {
    expect(strStr('aaaaa', 'bba')).to.equal(-1)
  })

  it('returns 0 if the needle is of length 0', () => {
    expect(strStr('aaaaa', '')).to.equal(0)
  })
})
