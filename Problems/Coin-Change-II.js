/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 
var change = function(amount, coins) {
    changeMethodCount = new Array(amount+1).fill( 0 ); 

	changeMethodCount[0] = 1;

    for(const coin of coins){
        for( let smallAmount = coin ; smallAmount <= amount ; smallAmount++ ){
            
            changeMethodCount[smallAmount] +=  changeMethodCount[smallAmount - coin ];
        }       
    }
    
    return changeMethodCount[ amount ];
};