/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let globalMaxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let localMaxSum = 0;
        for (let j = i; j < nums.length; j++) {
            localMaxSum += nums[j];

            if (localMaxSum > globalMaxSum) {
                globalMaxSum = localMaxSum;
            }
        }
    }

    return globalMaxSum;
};