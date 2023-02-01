T.C=0(N^2)
S.C=0(1)

var longestPalindrome = function (str) {
    if (str.length < 2) {
        return str;
    }
    let maxlength = 1;
    let start = 0;
    let low;
    let high;
    for (let i = 0; i < str.length; i++) {
        low = i - 1;
        high = i + 1;
        while (low >= 0 && str[low] == str[i]) {
            low--
        }
        while (high < str.length && str[high] == str[i]) {
            high++
        }
        while (low >= 0 && high < str.length && str[low] == str[high]) {
            low--;
            high++;
        }
        let length = high - low - 1;
        if (maxlength < length) {
            maxlength = length;
            start = low + 1;
        }
    }

    return (str.substring(start, maxlength + start));
};