/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function(nums) {
    // because it is a sorted array, every element appears in pairs
    // this means, we can check the adjacent digit as our search target
    let lo = -1, hi = nums.length - 1;
    while (lo + 1 < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (isValid(mid, nums)) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    return nums[hi];
  };
  
  function isValid(index, nums) {
    // 0 based array, so index is even means, the next
    // element should be same as this one
    if (index % 2 === 0) {
      return nums[index + 1] === nums[index];
    } else {
      return nums[index + 1] !== nums[index];
    }
  }