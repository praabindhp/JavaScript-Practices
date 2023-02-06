/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] == color) return image;
    fill(image, sr, sc, color, image[sr][sc]);
    return image;
}

var fill = function(image, sr, sc, color, cur) {
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    if(cur != image[sr][sc]) return;
    image[sr][sc] = color;
    fill(image, sr-1, sc, color, cur);
    fill(image, sr+1, sc, color, cur);
    fill(image, sr, sc-1, color, cur);
    fill(image, sr, sc+1, color, cur);
};