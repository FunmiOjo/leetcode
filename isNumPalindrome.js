const stringConversionApproach = num => {
  if (num < 0) return false

  let digits = num.toString().split('')
  const halfLength = Math.floor(digits.length / 2)

  for (
    let leftIndex = 0, rightIndex = digits.length - 1;
    leftIndex < halfLength;
    leftIndex++, rightIndex--
  ) {
    if (digits[leftIndex] !== digits[rightIndex]) {
      return false
    }
  }
  return true
}

const getReversedNum = num => {
  let reversedNum = 0
  // 1221
  while (num > reversedNum) {
    // reversedNum is multiplied by 10 so we can add the next digit
    // to the ones place which will be 0
    reversedNum = reversedNum * 10 + (num % 10)
    /* 
    0 * 10 + 1221 % 10 -> 12
    12 * 10 + 122 % 10 -> 122
    */

    num = Math.trunc(num / 10)
    /*
    122
    12
    */

    return { firstHalf: num, reversedFirstHalf: reversedNum }
  }
}

/*
Time complexity is O(log10(n)) because the input is 
divided by 10 at every iteration (so says Leetcode).
*/
const isPalindrome = num => {
  // negative numbers cannot be palindromes
  if (num < 0) {
    return false
  }

  // any palindrome ending with 0 has to start with 0
  // and only 0 satisfies this condition
  if (num % 10 === 0 && num !== 0) {
    return false
  }

  // reverse last half of number
  const { firstHalf, reversedFirstHalf } = getReversedNum(num)
  /* divide by 10 in the second statement to account for reservedFirstHalf
  with odd number of digits.  In this case, the last digit would be the middle
  digit in the palindrome.  Dividing and truncating lops this digit off.
  */
  return (
    firstHalf === reversedFirstHalf ||
    firstHalf === Math.trunc(reversedFirstHalf / 10)
  )
}
console.log(isPalindrome(10))
