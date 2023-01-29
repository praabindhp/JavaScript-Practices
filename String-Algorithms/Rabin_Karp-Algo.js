function RabinKarp(text, pattern) {
    const m = pattern.length;
    const n = text.length;
    let p = 0;
    let t = 0;
    const d = 256;
    const q = 101;
  
    for (let i = 0; i < m; i++) {
      p = (d * p + pattern.charCodeAt(i)) % q;
      t = (d * t + text.charCodeAt(i)) % q;
    }
  
    for (let i = 0; i <= n - m; i++) {
      if (p === t) {
        let j;
        for (j = 0; j < m; j++) {
          if (text.charAt(i + j) !== pattern.charAt(j)) {
            break;
          }
        }
  
        if (j === m) {
          return i;
        }
      }
  
      if (i < n - m) {
        t = (d * (t - text.charCodeAt(i) * Math.pow(d, m - 1)) + text.charCodeAt(i + m)) % q;
        if (t < 0) {
          t = (t + q) % q;
        }
      }
    }
  
    return -1;
  }
  
console.log(RabinKarp("MYNAMEISPRAABINDH", "PRAAB"))