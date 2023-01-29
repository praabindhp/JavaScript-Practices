function subsequences(arr) {
    let n = arr.length;
    let subs = [];
    for (let i = 0; i < (1 << n); i++) {
      let sub = [];
      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {
          sub.push(arr[j]);
        }
      }
      subs.push(sub);
    }
    return subs;
  }
  