let num1 = 371;
let sum = 0;
let num = num1;
while (num1 > 0) {
    let r = num1 % 10;
    sum = sum + r * r * r;
    num1 = Math.floor(num1 / 10);
}
if (num == sum) {
    console.log(num + ' Is An Armstrong Number');
} else {
    console.log(num + ' Is Not An Armstrong Number');
}