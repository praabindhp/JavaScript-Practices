function paintingFence(n, k) {

    let same = 0, diff = k, total = k, mod = 101;

    if (n == 0) return 0;
    if (n == 1) return k;

    for (let i = 2; i <= n; i++) {

      same = diff;
      diff = (diff * (k - 1) + total * (k - 1)) % mod;

      total = (same + diff) % mod;
    }
    return total;
  }

console.log(paintingFence(1, 2));