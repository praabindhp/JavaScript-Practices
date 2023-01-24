function compareSubstring(str1, start1, end1, str2, start2, end2) {
    var substring1 = str1.substring(start1, end1);
    var substring2 = str2.substring(start2, end2);
    if (substring1 === substring2) {
        return "The substrings are equal.";
    } else {
        return "The substrings are not equal.";
    }
}
console.log(compareSubstring("Hello World!", 0, 5, "Hello", 0, 5)); // The substrings are equal.
console.log(compareSubstring("Hello World!", 6, 11, "World", 0, 5)); // The substrings are equal.
console.log(compareSubstring("Hello World!", 0, 5, "Goodbye", 0, 5)); // The substrings are not equal.