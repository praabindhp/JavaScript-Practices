// Rest Operator
// Rest Operator Is Used To Collect Multiple Elements And Convert Them Into An Array
// It Is Used To Collect The Arguments Passed To A Function
// It Is Used To Collect The Remaining Elements Of An Array
// It Is Used To Collect The Properties Of An Object
// It Is Used To Collect The Elements Of An Array, Object, String, Map, Set, etc.

const initialArray = (...args) => {
    return args;
}

console.log(initialArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]