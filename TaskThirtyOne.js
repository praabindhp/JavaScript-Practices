let users = [
    { id: 1, name: "Praabindh" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Praabindh" }
];

// Find the index of the first Praabindh
alert(users.findIndex(user => user.name == 'Praabindh')); // 0

// Find the index of the last Praabindh
alert(users.findLastIndex(user => user.name == 'Praabindh')); // 3