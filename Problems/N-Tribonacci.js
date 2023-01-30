/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t0 = 0;
    let t1 = 1;
    let t2 = 1;
    let sum = 0;
    if (n == 0){
        return 0;
    } else if (n == 1){
        return 1;
    } else if (n == 2){
        return 1;
    } else {
        for (let i = 0; i < n-2; i++){
            sum = t0 + t1 + t2
            t0 = t1
            t1 = t2
            t2 = sum
    }
    return sum;
    }
};