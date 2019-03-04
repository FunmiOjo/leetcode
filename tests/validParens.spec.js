const { expect } = require('chai')
const validParens = require('../validParens')

describe('validParens', () => {
  it('takes a string of parentheses, brackets and curly braces and returns a boolean representing whether their arrangment is valid', () => {
    expect(validParens('()')).to.equal(true)
    expect(validParens('()[]{}')).to.equal(true)
    expect(validParens('(]')).to.equal(false)
    expect(validParens('([)]')).to.equal(false)
    expect(validParens('{[]}')).to.equal(true)
    expect(validParens('[')).to.equal(false)
  })
})
