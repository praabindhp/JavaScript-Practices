let a = 10;
let b = 20;

console.log("The Initial Value For A : " + a);
console.log("The Initial Value For B : " + b + "\n");

let temp = a;
a = b;
b = temp;

console.log("The Swapped Value For A : " + a);
console.log("The Swapped Value For B : " + b + "\n");

for(let i = 1; i <= 10; i++){
    console.log(i)
}

let x = 10
let y = 0


while(y < x){
    y += 1
    console.log("\nWorking With Value Y : " + y )
}

function fullName(firstName, lastName){
    return firstName + " " + lastName
}

console.log("\n" + fullName("Praabindh", "Pradeep"))

// describe("pow", function() {

//     describe("raises x to power 3", function() {

//         function makeTest(x) {
//             let expected = x * x * x;
//             it(`${x} in the power 3 is ${expected}`, function() {
//                 assert.equal(pow(x, 3), expected);
//             });
//         }

//         for (let x = 1; x <= 5; x++) {
//             makeTest(x);
//         }

//     });

//     it("if n is negative, the result is NaN", function() {
//         assert.isNaN(pow(2, -1));
//     });

//     it("if n is not integer, the result is NaN", function() {
//         assert.isNaN(pow(2, 1.5));
//     });

// });
