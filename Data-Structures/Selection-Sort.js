let readline = require("readline-sync")
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }

    return arr;
  }

let count = 0;
const arr = [];
while(true){
    count += 1;
    val = readline.question("Enter Element "+count+" : ")
    if (val == ''){
        console.log("Thank You For Entering The Elements :)\n");
        console.log(selectionSort(arr));
        break;
    } else {
        arr.push(Number(val));
    }
}