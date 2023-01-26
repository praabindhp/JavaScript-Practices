/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }

    function lootArray(subset = []) {
        let rob1 = 0
        let rob2 = 0
        
        for (let i = 0; i < subset.length; i++) {
            let temp = Math.max(subset[i] + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        }

        return rob2
    }

    return Math.max(lootArray(nums.slice(1)), lootArray(nums.slice(0, -1)))
};