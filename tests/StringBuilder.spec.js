const { expect } = require('chai')
const StringBuilder = require('../StringBuilder')

describe('StringBuilder', () => {
  const myName = new StringBuilder('funmi')
  describe('string method', () => {
    it('returns a string representing the data held in the object', () => {
      expect(myName.getString()).to.equal('funmi')
    })
  })

  describe('append method', () => {
    it('adds string in argument to existing string in instance', () => {
      myName.append('ojo')
      expect(myName.getString()).to.equal('funmiojo')
    })
  })
})
