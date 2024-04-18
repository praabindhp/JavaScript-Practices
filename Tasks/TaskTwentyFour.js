let user = null;
let x = 0;

// user ?. sayHi(x++);
console.log(x);

// Type Variants
let userAdmin = {
    admin() {
        alert("I am admin");
    }
};

let userGuest = {};

// userAdmin.admin ?.(); // I am admin

// userGuest.admin ?.(); // nothing happens (no such method)