/**
 * @param {string} s
 * @return {boolean}
 */

function isNumber(s) {
    return !/\d/.test(s) && isNaN(+s[0]) ? false : !isNaN(+s);
  }