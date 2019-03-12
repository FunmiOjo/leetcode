const { expect } = require('chai')
const wordCloud = require('../wordCloud')

describe('wordCloud', () => {
  it('takes a string and returns a hashmap of how many times each word appears', () => {
    expect(
      wordCloud(`After beating the eggs, Dana read the next step:`)
    ).to.deep.equal({
      after: 1,
      beating: 1,
      the: 2,
      eggs: 1,
      dana: 1,
      read: 1,
      next: 1,
      step: 1,
    })
    expect(
      wordCloud(`Add milk and eggs, then add flour and sugar.`)
    ).to.deep.equal({
      add: 2,
      milk: 1,
      and: 2,
      eggs: 1,
      then: 1,
      flour: 1,
      sugar: 1,
    })
  })
})
