/*
Prompt:
Remove a given element from an array in place and return the length of the resulting array
*/

const removeElement = (nums, val) => {
  let partitionIndex = nums.length - 1
  let instancesVal = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      instancesVal++
      const temp = nums[partitionIndex]
      nums[partitionIndex] = val
      nums[i] = temp
      partitionIndex--
    }
  }

  for (let j = 0; j < instancesVal; j++) {
    nums.pop()
  }
  return nums.length
}

/*
[0,2,2,1,2,1,2,2,4]
[0, 1, 1, 2, 2, 2, 2, 2, 4]

[0, 0, 1, 2, 2, 3, 4]

[0, 0, 1, 2, 2]
*/

module.exports = removeElement
