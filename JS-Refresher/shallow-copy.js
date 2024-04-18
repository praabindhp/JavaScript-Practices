const original = { name: "John", address: { city: "New York" } };

const shallowCopy = { ...original };
// Shallow copy
shallowCopy.address.city = "Los Angeles";

console.log(original);
// Output: { name: "John", address: { city: "Los Angeles" } } (Modified due to shallow copy)
