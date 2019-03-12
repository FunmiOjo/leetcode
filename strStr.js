/*
Prompt:
Write a function that returns the first occurrence of a needle in a haystack
or -1 if the needle is not part of the haystack

Approach:
One pointer will check each letter to see if it is the same as the current letter being checked
Another pointer will point to the current letter being checked
The current letter will start at the first letter of the needle
If there is a match, then advance both the haystack and needle pointer
  If all letters match, return initial match letter
  If one letter doesn't match, revert haystack and needle pointer to position after the first match was found
If there is no match, advance only haystack pointer
*/
const strStr = (haystack, needle) => {
  if (needle.length === 0) {
    return 0
  }

  if (needle.length > haystack.length) {
    return -1
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (
      let j = i, needleIndex = 0;
      needleIndex < needle.length;
      j++, needleIndex++
    ) {
      if (haystack[j] !== needle[needleIndex]) {
        break
      }
      if (needleIndex === needle.length - 1) {
        return i
      }
    }
  }
  return -1
}

module.exports = strStr
