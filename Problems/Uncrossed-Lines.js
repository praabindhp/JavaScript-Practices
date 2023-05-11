/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var maxUncrossedLines = function(nums1, nums2) {
    const m=nums1.length;
    const n=nums2.length
    const arr= Array.from({length:m+1},()=>Array.from({length:n+1},()=>0));
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(nums1[i-1]==nums2[j-1]){
                arr[i][j]=1+arr[i-1][j-1]
            }else{
                arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1])
            }
        }
    }
    return arr[m][n]
};