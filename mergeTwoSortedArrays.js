/*
Prompt:
Given two sorted arrays and their lengths, merge the second one into the first one to form a merged
and sorted array.  The first array has enough space for both elements.

Approach:
Move numbers in n to the back of the array (so each index will change to index + smaller
  array length)

Start long pointer at 0 + smaller array length in longer array
Start short pointer at 0 in small array
Compare the numbers at two pointers and put the smaller one in the each index
of the large array
Move forward the long pointer if a number from the long array is used
and move forward the short pointer if a number from the short array is used
[1, 2, 3, 0, 0]
[2, 5]

[1, 2, 1, 2, 3]
[2, 5]

[1*, 2, 1, 2, 3]
[1, 2*, 1, 2, 3]
[1, 2, 2*, 2, 3]
[1, 2, 2, 3*, 3]
[1, 2, 2, 3, 5*]
*/

const merge = (nums1, n, nums2, m) => {
  if (m === 0) {
    return nums1
  }
  // move numbers to back of first array
  for (let i = n - 1; i >= 0; i--) {
    nums1[i + m] = nums1[i]
  }

  let longPointer = nums1.length - n

  let shortPointer = 0
  let mergedIndex = 0
  while (shortPointer < nums2.length && longPointer < nums1.length) {
    if (nums1[longPointer] <= nums2[shortPointer]) {
      nums1[mergedIndex] = nums1[longPointer]
      longPointer++
    } else {
      nums1[mergedIndex] = nums2[shortPointer]
      shortPointer++
    }
    mergedIndex++
  }

  if (longPointer < nums1.length) {
    while (longPointer < nums1.length) {
      nums1[mergedIndex] = nums1[longPointer]
      longPointer++
      mergedIndex++
    }
  } else if (shortPointer < nums2.length) {
    while (shortPointer < nums2.length) {
      nums1[mergedIndex] = nums2[shortPointer]
      shortPointer++
      mergedIndex++
    }
  }
}

module.exports = merge
