function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Are You With Your Parent?');
    }
}

let age = prompt('How Old Are You?', 18);

if (checkAge(age)) {
    alert('Entry Permitted');
} else {
    alert('Not Permitted');
}