const { expect } = require('chai')
const climbStairs = require('../climbStairs')

describe('climbStairs', () => {
  it('returns number of distinct ways to add 1 and 2 to sum up n', () => {
    expect(climbStairs(2)).to.equal(2)
    expect(climbStairs(3)).to.equal(3)
    expect(climbStairs(4)).to.equal(5)
    expect(climbStairs(6)).to.equal(13)
  })
})
