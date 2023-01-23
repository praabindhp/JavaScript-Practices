const readline = require(`readline-sync`)
let s = readline.question("Enter The String : ")
let sum = 0
let x = s.split("")
let y = []
for(let i=0;i<x.length;i++){


    if(!isNaN(x[i])){
        var num = 0
        while(!isNaN(x[i])){
            num = ((num * 10) + parseInt(x[i]));
            i++;
        }

        sum = sum + num
    }

}
console.log(sum);