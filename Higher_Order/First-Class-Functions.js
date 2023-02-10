// Function Statement (alias) Function Declaration
function a() {
    console.log("a Called");
}

// Function Expression
var b = function (param1) {
    console.log(param1);
}
function xyz() {
    return function () {

    }
}

cosole.log(b(xyz));

// Anonymous Function

//