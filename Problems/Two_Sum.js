function twoSum(nums, target) {
    const map = {}
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        const complement = target - element
        if (map[complement] !== undefined) {
            return [map[complement], index]
        } else {
            map[element] = index
        }
    }
    return []
};

nums = [2, 7, 11, 15]
target = 9

console.log(twoSum(nums, target));