function checkPalindrom(str) {
    let original = String(str)
    let rev = original
        .split('')
        .reverse()
        .join('');

    if (rev == str) {
        console.log(str + " Is A Palindrome")
    } else {
        console.log(str + " Is Not A Palindrome");
    }
}

checkPalindrom(121);
checkPalindrom(123);
checkPalindrom("malayalam");