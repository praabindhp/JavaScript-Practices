// Matrix Chain Multiplication Using Recursion

function MatrixChainOrder(p , i , j)
{
	if (i == j)
		return 0;

	var min = Number.MAX_VALUE;

	var k=0;
	for (k = i; k < j; k++)
	{
		var count = MatrixChainOrder(p, i, k) + MatrixChainOrder(p, k + 1, j) + p[i - 1] * p[k] * p[j];

		if (count < min)
			min = count;
	}

	return min;
}

var arr = [ 1, 2, 3, 4, 3 ];
var N = arr.length;

console.log("Minimum Number Of Multiplications Is : " + MatrixChainOrder(arr, 1, N - 1));