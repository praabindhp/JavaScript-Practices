function quickSort(arr){
    if (arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++){
        if (arr[i] > pivot){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [-6, 8, 2, -2, 4]
console.log(quickSort(arr))