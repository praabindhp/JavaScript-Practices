// Array De-structuring

const initialArray = ["Swimming", "Reading", "Programming"];

let [hobby1, hobby2, hobby3] = initialArray;

console.log(hobby1, hobby2, hobby3);

// Object De-structuring

const person = {
    fullName: "Praabindh",
    age: 24,
    greet() {
        console.log("Hello, I am " + person.fullName + " and I am " + person.age + " years old.");
    }
};

let { fullName, age } = person;
let { greet } = person;

console.log(fullName, age);
greet();