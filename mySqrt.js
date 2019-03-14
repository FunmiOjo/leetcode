/*
Binary search of integers from 2 to n/2
2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
*/
const mySqrt = num => {
  if (num < 2) {
    return num
  }

  let first = 1
  let last = Math.floor(num / 2)
  let midpoint
  while (last - first > 1) {
    midpoint = first + Math.floor((last - first) / 2)

    // the square root is less than the midpoint
    if (num < midpoint * midpoint) {
      last = midpoint - 1
    } else if (num > midpoint * midpoint) {
      first = midpoint
    } else if (midpoint * midpoint === num) {
      return midpoint
    }
  }
  if (last * last > num) {
    return first
  } else {
    return last
  }
}

module.exports = mySqrt
