const original = { name: "John", address: { city: "New York" } };

const deepCopy = JSON.parse(JSON.stringify(original));
// Deep copy using JSON (not ideal)
deepCopy.address.city = "Chicago";

console.log(original);
// Output: { name: "John", address: { city: "New York" } } (Unaffected)
