function paintingFence(n, k) {
    
    let same = 0, diff = k, total = k, diff2 = 0;
    for (let i = 2; i <= n; i++) {
      same = diff;
      diff2 = total * (k - 1) % 1000000007;
      total = (same + diff + diff2) % 1000000007;
      diff = diff2;
    }
    return total;
  }  
  
console.log(paintingFence(3,2));