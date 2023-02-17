/**
 * @param {number} n
 * @return {number}
 */

var consecutiveNumbersSum = function(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        if (n / i < Math.floor((i + 1) / 2)) break;
        if (i % 2) {
            if (n % i === 0) result++;
        } else {
            if ((n / i) * 10 - Math.floor(n / i) * 10 === 5) result++;
        }
    }
    return result;
};