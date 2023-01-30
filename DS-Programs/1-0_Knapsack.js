function knapsack(profits, weights, capacity) {
    const n = profits.length;
    let res = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
      let weight = weights[i - 1];
      let profit = profits[i - 1];
      for (let j = 0; j <= capacity; j++) {
        if (weight > j) {
          res[i][j] = res[i - 1][j];
        } else {
          res[i][j] = Math.max(res[i - 1][j], res[i - 1][j - weight] + profit);
        }
      }
    }
    
    return res[n][capacity];
  }

const profits = [1,2,5,6];
const weights = [2,3,4,5];
let capacity = 8;

console.log(knapsack(profits, weights, capacity));