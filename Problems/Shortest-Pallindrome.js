/**
 * @param {string} s
 * @return {string}
 */

var shortestPalindrome = function(s) {
    const originalString = s
    const originalReversed = s.split('').reverse().join('')
    let reversed = originalReversed
    while(reversed !== s) {
        s = s.slice(0,-1)
        reversed = reversed.slice(1)
    }
    return originalReversed.slice(0,-s.length) + originalString
};