////Local and Global scope <<<<< Closures >>>>> 
/*
var a=10 //Global scope

function add(){
    var b = 20  //Local scope
    return a+b
    //console.log("b---->",b) if inside the function b will be displayed i.e b--->20 {}--> Closure
}
console.log("Sum-->",add())
console.log("a----->",a)
console.log("b----->",b)

Output

Sum--> 30
a-----> 10    
b-----> error
*/

/*
var a=10;
for(i=0;i<5;i++){
    var b=30
    console.log(a+b+i)
}
console.log("a----->",a)
console.log("b----->",b)

Output
40
41
42
43
44
a-----> 10
b-----> 30 //var keyword does allow to restrict the scope for FOR LOOP
*/

var a=10;
for(i=0;i<5;i++){
    let b=30
    console.log(a+b+i)
}
console.log("a----->",a)
console.log("b----->",b)

output
40
41
42
43
44
a-----> 10
b-----> error //let keyword restricts the scope of b
