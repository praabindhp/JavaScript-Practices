/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
    if (stockPrices.length < 2) return 0;
    if (stockPrices.length === 2) return 1;
    stockPrices.sort((a,b) => {return a[0] - b[0]});
    let count = 1;
    let currendDiff = stockPrices[0][1] - stockPrices[1][1]/(stockPrices[1][0] - stockPrices[0][0]);
    for (let i = 1; i < stockPrices.length - 1; i++) {
        let tempDiff = (stockPrices[i][1] - stockPrices[i+1][1])/(stockPrices[i+1][0] - stockPrices[i][0]);
        if (currendDiff != tempDiff) {
            count += 1;
            currendDiff = tempDiff;
        }
    }
    return count;
};