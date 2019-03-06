/*
Prompt:
Given a sorted array, remove the duplicates in place and return the length
of the resulting array.

Approach:
Set two pointers at first element of array. The first pointer will count the
unique numbers in the array.  The second pointer will find the numbers.

Set current number to number at second pointer.  
Advance second pointer until it is at a number that does not equal the current number
Then advance the first pointer.
Repeat until the second pointer reaches the end of the array.
Then remove pop elements off the array {second pointer - first pointer} times
Or then return first pointer index + 1
*/
const removeDuplicates = nums => {
  let firstPointer = 0
  let secondPointer = 0
  let currentNum = nums[0]
  while (secondPointer < nums.length) {
    nums[firstPointer] = currentNum
    while (nums[secondPointer] === currentNum) {
      secondPointer++
    }
    currentNum = nums[secondPointer]
    firstPointer++
  }
  for (let i = 0; i < secondPointer - firstPointer; i++) {
    nums.pop()
  }
  return nums.length
}

module.exports = removeDuplicates
