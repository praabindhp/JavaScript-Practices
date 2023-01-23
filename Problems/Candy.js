var candy = function(ratings) {
    if(ratings === null || ratings.length === 0) return ratings;
    
    let len = ratings.length;
    let count = 0;
    let candies = new Array(len).fill(1);
    
    for(let i = 1; i < len; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    for(let i = len - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    
    let result = 0;
    for(let candy of candies) result += candy;
    
    return result;
};