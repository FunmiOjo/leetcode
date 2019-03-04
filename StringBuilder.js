class StringBuilder {
  constructor(str) {
    this.characters = str.length ? str.split('') : []
    // this.append = this.append.bind(this)
    // this.getString = this.getString.bind(this)
  }

  append(strToAppend) {
    this.characters.push(...strToAppend.split(''))
  }

  getString() {
    return this.characters.join('')
  }
}

module.exports = StringBuilder
