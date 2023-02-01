function paintFence(n, k)
	{

	let dp = new Array(n + 1);
	dp.fill(0);
	let mod = 101;
	dp[1] = k;
	let same = 0, diff = k;

	for (let i = 2; i <= n; i++)
	{
		same = diff;

		diff = (dp[i - 1] * (k - 1));
        diff = diff % mod;

		dp[i] = (same + diff) % mod;
	}
	return dp[n];
	}
	
	let n = 3, k = 2;
	console.log(paintFence(n, k));