/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let ans = 0;
    let size = height.length;
    let leftMax = height[0];
    let rightMax = height[size -1];
    let leftArr = new Array(size);

    leftArr[0] = height[0];
    
    let rightArr = new Array(size);
    rightArr[size-1] = height[size -1];
    for(let i=1;i<height.length;i++){
        leftMax = Math.max(leftMax, height[i]);
        leftArr[i] = leftMax;
    }
    for(let k=height.length -2;k>=0;k--){
        rightMax = Math.max(rightMax, height[k]);
        rightArr[k] = rightMax;
    }
    
    for(let j=0;j<height.length;j++){
        ans = ans + (Math.min(leftArr[j], rightArr[j]) - height[j]);
    }
    return ans;
};