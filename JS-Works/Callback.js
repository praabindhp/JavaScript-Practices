function printArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  printArray(numbers, function(element) {
    console.log(element);
  });