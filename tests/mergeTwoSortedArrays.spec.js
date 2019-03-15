const { expect } = require('chai')
const mergeTwoSortedArrays = require('../mergeTwoSortedArrays')

describe('mergeTwoSortedArrays', () => {
  it('merges second sorted array into first sorted array in place', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [2, 5, 6]
    const mergedNums = [1, 2, 2, 3, 5, 6]
    const secondNums1 = [2, 0]
    const secondNums2 = [1]
    const secondMergedNums = [1, 2]
    // mergeTwoSortedArrays(nums1, 3, nums2, 3)
    mergeTwoSortedArrays(secondNums1, 1, secondNums2, 1)
    //  expect(nums1).to.deep.equal(mergedNums)
    expect(secondNums1).to.deep.equal(secondMergedNums)
  })
})
