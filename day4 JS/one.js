JavaScript is a Scripting Language

I am working on (EcmaScript is the base on writing JS{Standard of Writing a JS})
 ES5 > EcmaScript 5 > Old Version
 ES6 > EcmaScript 6 > New Version
 .................
 JavaScript
 TypeScript

///DataTypes///
1.String>>>>> "Nikhil",'abc',"Jhon",'Cop','154' (comes inside cotes)
2.Number>>>>> 23,4653,2.554,4876543
3.Boolean>>>> true /  false

///Focusing on ES5

//Variables//
 
var name="Niki"
var marks=68
var pass= true
var percent="95%"

name
"Niki"
marks
68
pass
true
percent
"95%"


typeof(name)
"string"
typeof(marks)
"number"
typeof(pass)
"boolean"

///Operators///

var a=100
var b=20
undefined
a+b
120
a-b
80
a*b
2000
a/b
5

Modulus/Remider of smaller to larger is always smaller

a%b ///Returns the reminder vale
a%b
0
3%2
1
2%1

--------------

var a="Hi"
var b='JavaScript'
undefined
a+b
"HiJavaScript"
a-b
NaN
a*b
NaN
a/b
NaN
a%b
NaN

///NaN=Not A Number

var a=10
var b='Hi '
undefined
b+a
"Hi 10"
b-a
NaN
a-b
NaN

string+string==string(concat)
string+number==string(concat)
number+string==string(concat)
number+number==number(sum)


<Interview Questions>

1.  10+'10'+10
    "101010"
2.  10+10+'10'
    "2010"
3.  "10"+10+10
    "101010"

<*****>

4.  '10'+10+10-1
    101009
5.  10+'10'+10-1
    101009
6.  10+10+'10'-1
    2009


///note

'10'-'a'
NaN
"a"-'1'
NaN
'10'-"2"
8
'52466'-1
52465
'4552545'-"5"
4552540
'22525'-"1a"
NaN
'45454a'-'15'
NaN

'10'+"5"   ////incase of '+' operator it will concat, rest all will work as shown below
"105"
"5"+'5'   ///concat
"55"
'10'-"5"
5
'10'*"5"
50
'10'/"5"
2
'10'%"5"
0
'10'+"5"  ///concat
"105"

Note//
 true is equal to 1
 false is equal to 0

var a=true
undefined
var b=false
undefined
a+b
1
a+a
2
a+5
6
a-5
-4
a+'hi'
"truehi"
////
var a=true
undefined
var b=5
undefined
a-b
-4
var c='hi'
undefined
a-c
NaN
a-b-c
NaN
a-b+c
"-4hi"
///
var a=true
undefined
var b=true
undefined
a+b
2
a-b
0
var a='true'
undefined
var b="true"
undefined
a+b
"truetrue"
a-b
NaN