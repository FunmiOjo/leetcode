/*
Approach:
Set variable carry to 0
Go through the strings backwards
Add each digit together
  If sum is greater than 1, add 0 + carry to front of sum string, then set carry to 1
  If sum is 1 or less, set carry to 0
If one is shorter and runs out, continue just adding carry
*/

const addBinary = (a, b) => {
  const longerNumber = a.length >= b.length ? a : b
  const shorterNumber = b.length <= a.length ? b : a
  let longIndex = longerNumber.length - 1
  let shortIndex = shorterNumber.length - 1
  let carry = 0
  let sum = []
  while (longIndex >= 0) {
    let shortDigit = shortIndex >= 0 ? Number(shorterNumber[shortIndex]) : 0
    let longDigit = Number(longerNumber[longIndex])
    let digitSum = longDigit + shortDigit + carry
    let newDigit = digitSum % 2
    sum.unshift(newDigit)
    if (digitSum > 1) {
      carry = 1
    } else {
      carry = 0
    }
    longIndex--
    shortIndex--
  }
  if (carry === 1) {
    sum.unshift(1)
  }
  return sum.join('')
}

module.exports = addBinary
