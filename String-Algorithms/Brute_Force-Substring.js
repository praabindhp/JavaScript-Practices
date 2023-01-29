function search(string, substring){
    for(let i = 0; i <= string.length - substring.length; i++){
        let j = 0
        for(; j < substring.length; j++){
            if(substring[j] != string[i + j]){
                break
            }}
        if(j === substring.length){
            return i
        }
    }
}

console.log(search('GEEKFORGEEKS', 'GEEKS'))