function subArraySum(arr, n, sum) {

    // Start
    for (let i = 0; i < n; i++) {
        let currentSum = arr[i];

        if (currentSum == sum) {
            console.log("Sum Found At Indexes " + i);
            return;
        } else {
            // Check Sub_Array
            for (let j = i + 1; j < n; j++) {
                currentSum += arr[j];

                if (currentSum == sum) {
                    console.log("Sum Found Between Indexes " +
                        i + " & " + j);
                    return;
                }
            }
        }
    }
    console.log("No Subarray Found");
    return;
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
subArraySum(arr, n, sum);