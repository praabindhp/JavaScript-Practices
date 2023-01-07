let finalArray = [];
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 3;
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i]) != val) {
            finalArray.push(nums[i]);
        }
    }
    console.log(finalArray);
}

removeElement(nums, val);