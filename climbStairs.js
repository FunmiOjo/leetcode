/*
Approach:
The number of combinations for each number is the sum of the combinations for
the number - 1 and the number - 2. 
We can calculate this starting at 0 and 1 which each have only 1 combination.
Then we can continue calculating combinations by taking the sum of the last two combinations
Sources:
https://www.youtube.com/watch?v=NFJ3m9a1oJQ
*/
const climbStairs = n => {
  if (n < 2) {
    return n
  }
  let minusOne = 1
  let minusTwo = 1
  let currentNum = 2
  while (currentNum <= n) {
    let newMinusOne = minusOne + minusTwo
    minusTwo = minusOne
    minusOne = newMinusOne
    currentNum++
  }
  return minusOne
}

module.exports = climbStairs
