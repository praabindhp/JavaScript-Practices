function BigUser() {

    this.name = "Praabindh";

    return { name: "Pradeep" }; // <-- returns this object
}

console.log(new BigUser().name);