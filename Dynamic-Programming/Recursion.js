function countDown(n) {
    for (let i = n; i > 0; i--) {
      console.log(i)
    }
    console.log('Hooray')
  }
  
function countDownRecursive(n) {
  if (n <= 0) {
    console.log('Hooray')
    return
  }

  console.log(n)
  countDownRecursive(n - 1)
}

function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i
  }
  return total
}

function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    return total
  }
  return sumRangeRecursive(n - 1, total + n)
}