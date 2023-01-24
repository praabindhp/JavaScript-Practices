/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
        while (stack && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop();
            maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};