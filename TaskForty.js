for (let i = 0; i < 4; i++) {
    var myString = "number" + i;
    eval(myString + "= 9");
}

number1 = 10;
number2 = 20;
console.log(number1);
console.log(number2)