const lengthOfLastWord = str => {
  if (str.length === 0) {
    return 0
  }
  /* find last word */
  let lastLetterIndex = str.length - 1
  let lastLetter
  while (lastLetterIndex > -1) {
    lastLetter = str[lastLetterIndex]
    if (lastLetter !== ' ') {
      break
    }
    lastLetterIndex--
  }
  /* if there are only spaces in the string, lastLetterIndex will be -1 */
  if (lastLetterIndex < 0) {
    return 0
  }

  let currentLetter
  let letterCount = 0
  while (lastLetterIndex >= 0) {
    currentLetter = str[lastLetterIndex]
    if (currentLetter === ' ') {
      break
    }
    letterCount++
    lastLetterIndex--
  }
  return letterCount
}

module.exports = lengthOfLastWord
