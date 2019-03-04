/*
Prompt:
Write a function that takes an array of strings and returns the longest common
prefix among the strings.  If there is no common prefix, return an empty string.
All inputs are in lower case letters a-z.

Approach:
Loop through the array as many times as the shortest string. At each loop, take a letter
of the first string and then check to see if the letter at the samtheye
index in other strings is the same.  If any are the same, add them to the ongoing prefix.
If not, return the existing ongoing prefix 
*/
const StringBuilder = require('./StringBuilder')

const longestCommonPrefix = arrayOfStrings => {
  /*
  if there are no strings, there can be no common prefix
  */
  if (arrayOfStrings.length === 0) {
    return ''
  }

  /*
  if there is only one string, the whole string is the largest common prefix
  */
  if (arrayOfStrings.length === 1) {
    return arrayOfStrings[0]
  }
  let prefix = new StringBuilder('')
  let currentLetter
  for (let i = 0; i < arrayOfStrings[0].length; i++) {
    currentLetter = arrayOfStrings[0][i]
    for (let j = 1; j < arrayOfStrings.length; j++) {
      if (arrayOfStrings[j][i] !== currentLetter) {
        return prefix.getString()
      }
    }
    prefix.append(currentLetter)
  }
  return prefix.getString()
}

module.exports = longestCommonPrefix
