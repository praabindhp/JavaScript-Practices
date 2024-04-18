function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Praabindh");

console.log(user.name); // Praabindh
console.log(user.isAdmin); // false