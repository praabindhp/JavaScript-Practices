/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function(num, k) {

    let sum = BigInt(num.join('')) + BigInt(k);
    let convertSum = sum.toString().split('');
    return convertSum;
    
};