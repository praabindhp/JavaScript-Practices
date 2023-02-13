/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var countOdds = function(low, high) {
    let counter=0;
    for(let i=low;i<=high;i++){
        if(i%2!=0){
            counter++;
        }
    }
    return counter;
};