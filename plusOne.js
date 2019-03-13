/*
Approach:
Declare carry variable at value 1
Add carry to each variable, going backwards
  Replace element with result % 10
  If result is greater than 9, set carry to 1, else set to 0
  At 0 index, if carry is 1, shift 1 to array
*/
const plusOne = digits => {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let digitSum = digits[i] + carry
    digits[i] = digitSum % 10
    carry = digitSum > 9 ? 1 : 0
  }
  if (carry === 1) {
    digits.unshift(1)
  }
  return digits
}

module.exports = plusOne
