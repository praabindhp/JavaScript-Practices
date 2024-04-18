let user = { name: "Praabindh" };
let admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // Praabindh (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin