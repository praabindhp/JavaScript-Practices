let user = { // belongs to another code
    name: "Praabindh"
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]); // we can access the data using the symbol as the key