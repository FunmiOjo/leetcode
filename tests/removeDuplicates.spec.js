const { expect } = require('chai')
const removeDuplicates = require('../removeDuplicates')

describe('removeDuplicates', () => {
  it('removes duplicates from array in place and returns length of resulting array', () => {
    expect(removeDuplicates([1, 1, 2])).to.equal(2)
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).to.equal(5)
  })
})
