//// Hoisting Concept (how javascript execute the coding)


var a=15
var b=35

console.log(add(a,b))

function add(a,b){
    return a+b
}

var a;

// code got executed without error  output----> 50

----------------------

How JavaScript reads the code


var a;
var b;
function add(a,b){
    return a+b
}
a=15
b=35
add(a,b)