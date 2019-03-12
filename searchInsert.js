/*
Prompt:
Given a sorted array and a target value, return the index if the target is found.
If not found, return the index where it would be if inserted in order.

Approach:
If target is smaller than the smallest element return 0
If target is larger than the largest element return last index
Visit each number
  If number is greater than or equal to target, return index
*/
const searchInsert = (nums, target) => {
  if (target < nums[0]) {
    return 0
  }

  if (target > nums[nums.length - 1]) {
    return nums.length
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
}

module.exports = searchInsert
