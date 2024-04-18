const userData = {
    name: 'Praabindh',
    age: 24,
    greetFunction: function () {
        console.log('Hi, I am ' + this.name);
    },
    hasHobbies: true
}

userData.greetFunction();
// Hi, I am Praabindh