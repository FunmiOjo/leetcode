/*
Prompt:
Write a function that takes in a string of characters representing Roman numerals.
I'll assume that the characters are all in caps.
The function should return the integer represented by the string.
Each character will be one of seven symbols represented here in an object as key with
a value representing the integer it represents.
{I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
Roman numerals are read from left to right with larger characters coming first, except
in the case of representations of four and nine instances which are represented by a lower character
representing a subtraction from the next character.

Approach:
Go through the string with two pointers.  One will be one character ahead of the other.
If the character at the fast pointer is greater than the character at the slow pointer,
then substract the slow pointer character from the sum, else add it.
If character at fast pointer is undefined, add slow character and return
*/

const romanToInt = romanNumeral => {
  if (romanNumeral.length < 1) {
    return 0
  }
  const numeralDefinitions = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let slowPointer = 0
  let fastPointer = 1
  let sum = 0
  while (romanNumeral[slowPointer] !== undefined) {
    /* we are at the end of the string and can just
    add the last numeral
    */
    if (numeralDefinitions[romanNumeral[fastPointer]] === undefined) {
      sum += numeralDefinitions[romanNumeral[slowPointer]]
      return sum
    }
    /* if a number is larger than the number that comes after it,
    it should be subtracted from the sum, otherwise it should
    be added to the sum
    */
    if (
      numeralDefinitions[romanNumeral[slowPointer]] <
      numeralDefinitions[romanNumeral[fastPointer]]
    ) {
      sum += numeralDefinitions[romanNumeral[slowPointer]] * -1
    } else {
      sum += numeralDefinitions[romanNumeral[slowPointer]]
    }
    slowPointer++
    fastPointer++
  }
  return sum
}

module.exports = romanToInt
