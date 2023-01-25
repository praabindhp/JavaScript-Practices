const readline = require('readline-sync') // npm i readline-sync

function search(text, pattern)
{
	let M = pattern.length;
	let N = text.length;

	for (let i = 0; i <= N - M; i++) {
		let j;

		for (j = 0; j < M; j++)
			if (text[i + j] != pattern[j])
				break;

		if (j == M)
			console.log("\nPattern Found At Index : " + i);
	}
}

let text = readline.question("Enter The Text : ");
let pattern = readline.question("Enter The Pattern : ");

// let text = "AABAACAADAABAAABAA";
// let pattern = "AABA";

search(text, pattern);