/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

function getPermutation(n, k) {
    // Create an array of numbers from 1 to n
    const nums = Array.from({ length: n }, (_, i) => i + 1);

    // Create an array of factorials from 0! to (n - 1)!
    const factorials = [1];
    for (let i = 1; i < n; i++) {
        factorials[i] = factorials[i - 1] * i;
    }

    // Decrement k to account for 0-based indexing
    k--;

    // Create the result string
    let result = '';

    // Iterate through the numbers in nums
    for (let i = n; i >= 1; i--) {
        // Calculate the index of the selected digit
        const index = Math.floor(k / factorials[i - 1]);

        // Add the selected digit to the result string
        result += nums[index];

        // Remove the selected digit from nums
        nums.splice(index, 1);

        // Update k to the remainder of k divided by (i - 1)!
        k %= factorials[i - 1];
    }

    return result;
}