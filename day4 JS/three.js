
console.log()  //For checking Output and Debug

console.log('Hiii')
VM1022:1 Hiii

Syntax: alert('')//For PopUp notification
alert('Form Subbmitted Successfully') 

Syntax: confirm('')// Take confirmation from user(boolean return)
confirm("Do you want to leave")
true
confirm("Do you want to leave")
false
var a=confirm("Do you want to leave")
undefined 
a
true
var a=confirm("Do you want to leave")
undefined
a
false

Syntax: prompt('')// For taking user input
prompt('What is your name')
"Nikhil"
var age=prompt('What is your age')
undefined
age
"23"

/////
var a=prompt('Enter first value')
var b=prompt('Enter second value')
var out=a+b
alert(out)

out     ///input is string
"1520"

syntax: parseInt() //To convert string numeric value into  a integer value
var a="25"
undefined
var b='5'
undefined
parseInt(a)
25
parseInt(b)
5
parseInt(a)+parseInt(b)
30

syntax: parseFloat()//To return excat decimal value
var a=10.5
undefined
parseInt(a)
10
parseFloat(a)
10.5
var b=18.254
undefined
parseFloat(b)
18.254

var a=prompt('Enter first value') //10.225
var b=prompt('Enter second value')//25.225
var out=parseFloat(a)+parseFloat(b)
alert(out)
undefined
out
35.45 //Excat output value