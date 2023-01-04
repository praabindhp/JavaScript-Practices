let sum = 0;

while (true) {

    let value = +prompt("Enter A Number", '');

    if (!value) break; // (*)

    sum += value;

}
alert('Sum: ' + sum);