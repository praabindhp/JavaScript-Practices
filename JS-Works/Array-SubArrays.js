function subArrays(arr) {
    let subs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        subs.push(arr.slice(i, j));
      }
    }
    return subs;
  }  