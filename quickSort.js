/*
Prompt:
Implement quicksort

Approach:
Divide and conquer strategy
Average time complexity is O(nlogn)
Worst case time complexity is O(n^2)

Mark the last element in the segment as the pivot
Place a pointer marking the eventual pivot placement at first element
Visit all elements except last
Swap each element less than or equal to the pivot with the element at
the pivot placement index
  Increment pivot placement index only after swapping
Swap the pivot with the element at the pivot placement index

Sources:
https://www.youtube.com/watch?v=SLauY6PpjW4
https://www.youtube.com/watch?v=COk73cpQbFQ

*/

const partition = (nums, start = 0, end = nums.length - 1) => {
  const pivot = nums[end]
  let pivotPlacementIndex = start
  for (let i = start; i < end; i++) {
    if (nums[i] <= pivot) {
      let temp = nums[i]
      nums[i] = nums[pivotPlacementIndex]
      nums[pivotPlacementIndex] = temp
      pivotPlacementIndex++
    }
  }
  nums[end] = nums[pivotPlacementIndex]
  nums[pivotPlacementIndex] = pivot
  return pivotPlacementIndex
}

const quickSort = (nums, start = 0, end = nums.length - 1) => {
  if (start >= end) {
    return
  }
  const pivotIndex = partition(nums, start, end)
  console.log()
  quickSort(nums, start, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, end)
}

module.exports = { quickSort, partition }
