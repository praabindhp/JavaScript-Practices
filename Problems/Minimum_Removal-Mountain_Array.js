/**
 * @param {number[]} nums
 * @return {number}
 */

var minimumMountainRemovals = function(A) {
    let n=A.length,
        lisL=[...Array(n)].map(d=>1),
        ldsR=[...Array(n)].map(d=>1)

    for(let i=0;i<n;i++)
        for (let j = 0; j < i; j++) 
            if(A[i]>A[j])
                lisL[i]=Math.max(lisL[i],lisL[j]+1)

    for(let i=n-1;i>=0;i--)
        for (let j = n-1; j >i; j--) 
            if(A[i]>A[j])
                ldsR[i]=Math.max(ldsR[i],ldsR[j]+1)

    let result=Infinity
    for (let i = 1; i < n-1; i++) {
        let mountainLength=lisL[i]+ldsR[i]-1
        if(lisL[i]>1&&ldsR[i]>1)
            result=Math.min(result,n-mountainLength)
    }
    return result
};