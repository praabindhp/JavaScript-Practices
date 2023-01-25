let arr = [1,2,3,4,5,6,7,8];
arr.sort((a,b)=>a-b);
let leftArr=[];
let rightArr =[];

for(let i=0;i<arr.length;i++){
    if(i%2==0){
        leftArr.push(arr[i]);
    }else{
        rightArr.push(arr[i]);
    }
}

let j=0;
for(let i=1;i<arr.length;i+=2){
        
            leftArr.splice(i+1,0,rightArr[j]);
        j++;
}

let res="";
for(let i=0;i<leftArr.length;i++){
    if(i==leftArr.length-1){
        res+=leftArr[i];
        break;
    }
    if(i%2==0){
        res+=leftArr[i]+"<";
    }else{
        res+=leftArr[i]+">";
    }
}

console.log(res);