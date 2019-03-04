// Reverse integer but return 0 if reversed integer is less than 2^31 or greater than
// 2^31 - 1
var reverse = function(x) {
  const numCastToString = x.toString()

  let stringCastToArray = numCastToString.split('')
  if (x < 0) {
    stringCastToArray = stringCastToArray.slice(1)
  }

  const halfLength = Math.floor(stringCastToArray.length / 2)

  for (
    let i = 0, indexToSwitch = stringCastToArray.length - 1;
    i < halfLength;
    i++, indexToSwitch--
  ) {
    const temp = stringCastToArray[i]
    const digitToSwitch = stringCastToArray[indexToSwitch]
    stringCastToArray[i] = digitToSwitch
    stringCastToArray[indexToSwitch] = temp
  }

  let reversedNumber = Number(stringCastToArray.join(''))

  if (reversedNumber => Math.pow(2, 31)) {
    return 0
  }

  if (x < 0) {
    reversedNumber = reversedNumber * -1
  }
  return reversedNumber
}

console.log(reverse(-123456))
