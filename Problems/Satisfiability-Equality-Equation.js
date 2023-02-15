
equationsPossible = (equations) => {

	// create an index where the key is the name of a variable, and 
	// the value is the bucket with that variable in it.
	let key_bucket_index = new Map();

	// group all the equations into:
	//   equalities, the equations with ==
	//   and inequalities, the equations with !=

	let equalities = [];
	let inequalities = [];

	for (let equation of equations) {

		let l = equation[0];
		let r = equation[3];

		let k = equation[1] === "=" ? equalities : inequalities;
		k.push([l, r]);

	}

	// loop now, at the beginning, to see if any inequalities satisfy the condition
	// that the left variable is the same as the right variable. if so the 
	// equations can not be satisfied.
	for (let [l, r] of inequalities) {
		if (l == r) return false;
	}

	// loop through all the equalities...
	for (const [l, r] of equalities) {

		// check to see if a bucket exists with either the left or right variable.

		let existing = key_bucket_index[l] || key_bucket_index[r];

		if (existing) {
			
			// if so, empty one of both or those buckets into a newly created bucket.
			let bucket = {
				[l]: true,
				[r]: true,
				... (key_bucket_index[l] || new Map()),
				... (key_bucket_index[r] || new Map()),
			};

			// point the index in the key bucket index to the new bucket.
			// any old buckets will be picked up by garbage collection.
			for (let key in bucket) {
				key_bucket_index[key] = bucket;
			}

		} else {

			// if not, just create a new bucket with both values in it.
			const bucket = new Map();
			bucket[l] = true;
			bucket[r] = true;
			key_bucket_index[l] = bucket;
			key_bucket_index[r] = bucket;

		}

	}

	// loop through all the inqualities again...
	for (let [l, r] of inequalities) {

		// if any inequality satisfies the following condition:
		//  both the left and right values are in the same bucket
		//  then there is no way to satisfy the equation
		if (key_bucket_index[l] && key_bucket_index[l][r] || key_bucket_index[r] && key_bucket_index[r][l]) return false;

	}

	// otherwise there is no reason the equations cannot be satisfied
	return true;

};