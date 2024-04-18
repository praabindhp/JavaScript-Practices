const lodash = require('lodash');

const original = { name: "John", address: { city: "New York" } };

const deepCopy = lodash.cloneDeep(original);

deepCopy.address.city = "Chicago";

console.log(original); // Output: { name: "John", address: { city: "New York" } } (Unaffected)
