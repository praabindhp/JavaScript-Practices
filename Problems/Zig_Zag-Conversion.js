/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let res = [];
    let count = 0;
    let up = true;
    for(let i =0; i<s.length;i++){

        if(!res[count]) res[count] = []
        res[count].push(s[i])

        count = up ? count+1 : count-1
        
        if(count+1 == numRows) up = false;
        else if(count == 0) up = true;
    }
    let result = ''
    for(let i of res){
        result += i.join('')
    }
    return result;
};