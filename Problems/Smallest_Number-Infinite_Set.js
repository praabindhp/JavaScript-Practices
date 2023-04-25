var SmallestInfiniteSet = function() {
    this.set = Array( 1000 ).fill( 1 )
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let num = this.set.findIndex( n => n )
    this.set[ num ] = 0
    return num + 1
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.set[ num - 1 ] = 1
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */