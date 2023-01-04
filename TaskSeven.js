let messageTold = "Enter A Year";
let year = prompt(messageTold, ["Enter Year - 20XX"]);
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    alert("It's A Leap Year");
} else {
    alert("Not A Leap Year")
}