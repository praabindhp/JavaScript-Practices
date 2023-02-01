T.C=0(N^3)
S.C=0(1)

var longestPalindrome = function (str) {
    let chr = "";
    let bool = true;
    let maxlength = 1;
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        chr = ""
        for (let j = i; j < str.length; j++) {
            bool = true;
            chr += str[j]
            for (let k = 0, l = chr.length - 1; k <= l; k++, l--) {
                if (chr[k] !== chr[l]) {
                    bool = false;
                    break;
                }
            }
            if (bool === true) {
                if (chr.length >= maxlength) {
                    maxlength = chr.length;
                    ans = chr;
                }
            }
        }

    }
    return (ans);
};