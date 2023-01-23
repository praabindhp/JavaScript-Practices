const readline = require('readline-sync');

grades = [];
var teacherAttention = function(grades) {
    if(grades === null || grades.length === 0) return grades;
    
    let len = grades.length;
    let attention = new Array(len).fill(1);
    
    for(let i = 1; i < len; i++) {
        if(grades[i] < grades[i - 1]) {
            attention[i] = attention[i - 1] + 1;
        }
    }
    
    for(let i = len - 2; i >= 0; i--) {
        if(grades[i] < grades[i + 1]) {
            attention[i] = Math.max(attention[i], attention[i + 1] + 1);
        }
    }
    
    return attention;
};

let count = 0;
while(true){
    count += 1;
    val = readline.question("Enter Student "+count+" - Grade : ")
    if (val == ''){
        console.log("Thank You For Entering The Grade");
        console.log(teacherAttention(grades));
        break;
    } else{
        grades.push(val);
    }
}

// String Algo

// Z - Algo
// Naive Approach - Brute Force
// Compare Substring
// KMP Algo
// Rabin-Karp Algo