/*
Approach:
Linear solution
Visit each number and compare whether taking only the number itself or adding it to the
previous subArraySum would be greater.  Keep track of the subArraySums and the maxSubArraySums

Sources:
https://www.youtube.com/watch?v=2MmGzdiKR9Y
https://github.com/bephrem1/backtobackswe/blob/master/Dynamic%20Programming%2C%20Recursion%2C%20%26%20Backtracking/maxContiguousSubarraySum.java
*/
const cubicSolution = nums => {
  let maxSum = -Infinity
  /* this for loop explores the values including and to the right of of the left value
   */
  for (let left = 0; left < nums.length; left++) {
    for (let right = left; right < nums.length; right++) {
      let currentSubArraySum = 0
      for (let i = left; i <= right; i++) {
        currentSubArraySum += nums[i]
      }
      maxSum = Math.max(maxSum, currentSubArraySum)
    }
  }
  return maxSum
}

const quadraticSolution = nums => {
  let maxSum = -Infinity

  for (let left = 0; left < nums.length; left++) {
    let currentSubArraySum = 0
    for (let right = left; right < nums.length; right++) {
      currentSubArraySum += nums[right]
      maxSum = Math.max(maxSum, currentSubArraySum)
    }
  }
  return maxSum
}

const linearSolution = nums => {
  let maxSum = -Infinity
  let previousMaxSum = -Infinity

  for (let i = 0; i < nums.length; i++) {
    previousMaxSum = Math.max(previousMaxSum + nums[i], nums[i])
    maxSum = Math.max(maxSum, previousMaxSum)
  }
  return maxSum
}

const maxSubArray = nums => {
  return linearSolution(nums)
}

module.exports = maxSubArray
