function subsets(arr) {
    let subsets = [];
    let n = arr.length;
    for (let i = 0; i < (1 << n); i++) {
      let subset = [];
      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {
          subset.push(arr[j]);
        }
      }
      subsets.push(subset);
    }
    return subsets;
  }
  