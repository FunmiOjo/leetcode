const isAlphaLower = char => {
  const code = char.charCodeAt()
  return code >= 97 && code <= 122
}

const decapitalize = words => {
  return words.map(word => word.toLowerCase())
}

const removeNonAlphaChars = words => {
  return words.map(word => {
    return word
      .split('')
      .filter(char => isAlphaLower(char))
      .join('')
  })
}

const wordCloud = str => {
  const wordFrequencies = {}
  const wordArr = str.split(' ')
  const words = removeNonAlphaChars(decapitalize(wordArr))
  words.forEach(word => {
    if (wordFrequencies[word]) {
      wordFrequencies[word]++
    } else {
      wordFrequencies[word] = 1
    }
  })
  return wordFrequencies
}

module.exports = wordCloud
