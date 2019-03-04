const lengthOfLongestSubstring = str => {
  if (str.length === 0) {
    return 0
  }

  let highestIndexOfCharsInStr = {}
  let startIndex = 0
  let longestSubStringIndices = [0, 1]

  for (let i = 0; i < str.length; i++) {
    if (str[i] in highestIndexOfCharsInStr) {
      startIndex = Math.max(startIndex, highestIndexOfCharsInStr[str[i]] + 1)
      highestIndexOfCharsInStr[str[i]] = i
    } else {
      highestIndexOfCharsInStr[str[i]] = i
    }

    if (((i + 1) - startIndex) > (longestSubStringIndices[1] - longestSubStringIndices[0])) {
      longestSubStringIndices = [startIndex, i + 1]
    }

  }

  return longestSubStringIndices[1] - longestSubStringIndices[0]
}

/*
{
  a: 3,
  b: 1,
  c: 2
}
startIndex = 3
longestSubstringIndices = [0, 3]
*/

console.log(lengthOfLongestSubstring('pwwkew'))
