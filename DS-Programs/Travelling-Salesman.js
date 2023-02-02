const V = 4;

const travllingSalesmanProblem = (graph, s) => {

	let vertex = [];
	for (let i = 0; i < V; i++) {
		if (i !== s) {
			vertex.push(i);
		}
	}

	let min_path = Number.MAX_VALUE;

	do {
	
		let current_pathweight = 0;
		
		let k = s;
		
		for (let i = 0; i < vertex.length; i++) {
			current_pathweight += graph[k][vertex[i]];
			k = vertex[i];
		}
		current_pathweight += graph[k][s];
		min_path = Math.min(min_path, current_pathweight);

	} while (findNextPermutation(vertex));
	return min_path;
}

const swap = (data, left, right) => {

	let temp = data[left];
	data[left] = data[right];
	data[right] = temp;
	
	return data;
}

const reverse = (data, left, right) => {

	while (left < right) {
		let temp = data[left];
		data[left++] = data[right];
		data[right--] = temp;
	}

	return data;
}

const findNextPermutation = (data) => {

	if (data.length <= 1) {
		return false;
	}
	let last = data.length - 2;

	while (last >= 0) {
		if (data[last] < data[last + 1]) {
			break;
		}
		last--;
	}

	if (last < 0) {
		return false;
	}
	let nextGreater = data.length - 1;

	for (let i = data.length - 1; i > last; i--) {
		if (data[i] > data[last]) {
			nextGreater = i;
			break;
		}
	}

	data = swap(data, nextGreater, last);
	
	data = reverse(data, last + 1, data.length - 1);

	return true;
}

const graph = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
let s = 0;
console.log(travllingSalesmanProblem(graph, s));