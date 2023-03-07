/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */

var minimumTime = function (time, totalTrips) {
    let maxTime = Math.min.apply(null, time) * totalTrips;
    let minTime = 1;
  
    while (minTime < maxTime) {
      const midTime = Math.floor((minTime + maxTime) / 2);
      let trips = 0;
      for (const tripTime of time) {
        trips += Math.floor(midTime / tripTime);
      }
  
      trips < totalTrips ? (minTime = midTime + 1) : (maxTime = midTime);
    }
  
    return minTime;
  };