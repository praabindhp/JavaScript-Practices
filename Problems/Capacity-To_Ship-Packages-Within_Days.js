/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var shipWithinDays = function(weights, days) {
    // find the left and right boundary of the initial search range
    let left = Math.max(...weights);
    let right = weights.reduce((sum, weight) => sum + weight, 0);

    // search the range to check if the current capacity is possible or not
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (isPossible(weights, days, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

const isPossible = (weights, days, capacity) => {
    let daysNeeded = 1;
    let currentLoad = 0;
    for (let weight of weights) {
        if (currentLoad + weight > capacity) {
            currentLoad = 0;
            daysNeeded += 1;
        }
        currentLoad += weight;
    }
    return daysNeeded <= days;
}