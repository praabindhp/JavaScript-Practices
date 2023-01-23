const readline  = require(`readline-sync`)
let x = [[1,7,6],
        [5,4,3],
        [2,9,8]]
let passcode = readline.question("Enter Passcode & Should Be 6 Digits : 124578")
let sec = 1;
var myArr = String(passcode).split("").map((passcode)=>{
    return Number(passcode)
  });

for(let i=1;i<6;i++){
    //if consecutive seconds will be Zero
    if(myArr[i-1]==myArr[i]){
        continue;
    }
    else{
        //if adjacent
        if(check(myArr[i-1],myArr[i])){
            sec = sec + 1;
        }
        //not adjacent 
        else{
            sec = sec + 2;
        }
    }
}

function check(prev,curr){
    let row = 0, col = 0;
    l1 : for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(x[i][j]==curr){
                row = i;
                col = j;
                break l1;
            }
        }
    }
    if(row-1>=0 && x[row-1][col]==prev){
        return true;
    }
    else if(col+1<x.length && x[row][col+1]==prev){
        return true;
    }
    else if(row+1<x.length && x[row+1][col]==prev){
        return true;
    }
    else if(col-1>=0 && x[row][col-1]==prev){
        return true;
    }
    return false;

}
console.log(`Time Required Will Be ${sec} Seconds`)