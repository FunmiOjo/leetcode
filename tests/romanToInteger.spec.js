const { expect } = require('chai')
const romanToInteger = require('../romanToInteger')

describe('romanToInteger', () => {
  it('returns the integer represented by a Roman numeral', () => {
    expect(romanToInteger('III')).to.equal(3)
    expect(romanToInteger('LVIII')).to.equal(58)
  })

  it('returns correct integer in cases where certain numerals are meant to be subtracted', () => {
    expect(romanToInteger('IV')).to.equal(4)
    expect(romanToInteger('IX')).to.equal(9)
    expect(romanToInteger('MCMXCIV')).to.equal(1994)
  })
})
