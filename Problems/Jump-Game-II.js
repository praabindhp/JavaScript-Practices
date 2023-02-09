/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
    var output = 0
    var jump = 0
    var far = 0

    for(i=0;i<nums.length-1;i++){
        jump = Math.max(jump , nums[i] + i)
        
        if(i == far){
            far = jump
            output ++
        }
    }

    return output
};