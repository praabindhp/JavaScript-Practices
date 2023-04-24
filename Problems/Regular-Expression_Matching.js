/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    if (pLen === 0) return sLen === 0;
    let first_match = (sLen !== 0 && (p[0] === s[0] || p[0] === '.'));
    if (pLen >= 2 && p[1] === '*') {
        // no match:  aa , c*       ||      match:       aaa , a*
        return (isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p)));
    } else {
        return first_match && isMatch(s.substring(1), p.substring(1));
    }
};