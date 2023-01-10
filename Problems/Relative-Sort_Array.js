/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = {};
    let first = [];
    let last = [];
    //Creating an object with keys of second array elements : as an empty array
    for (let i = 0; i < arr2.length; i++) {
        result[' ' + arr2[i]] = [];
    }
    for (let i = 0; i < arr1.length; i++) {
        if (result[' ' + arr1[i]] !== undefined) {
            result[' ' + arr1[i]].push(arr1[i]); //Adding the array elements in the specified key position.
        } else {
            last.push(arr1[i]); //adding the elements which are not present in second array to be appended later.
        }
    }
    last = last.sort((a, b) => a - b);
    for (const [key, value] of Object.entries(result)) {
        first.push(...value);
    }
    return first.concat(...last);
};