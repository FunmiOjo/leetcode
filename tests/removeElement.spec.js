const { expect } = require('chai')
const removeElement = require('../removeElement')

describe('removeElement', () => {
  it('removes all instances of a given value from an array in place and returns the length of the resulting array', () => {
    expect(removeElement([3, 2, 2, 3], 3)).to.equal(2)
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).to.equal(5)
    expect(removeElement([0, 2, 2, 1, 2, 1, 2, 2, 4], 2)).to.equal(4)
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).to.equal(5)
    expect(removeElement([1, 2, 3, 4], 1)).to.equal(3)
  })
})
