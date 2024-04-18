let userName = "Praabindh";
let age = 24;
const hasHobbies = ["Swimming", "Reading", "Programming"];

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    );
}

console.log(summarizeUser(userName, age, hasHobbies));

// Name is Praabindh, age is 24 and the user has hobbies: true
