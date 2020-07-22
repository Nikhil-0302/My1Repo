syntax:Math.random()// To generate a random number

Math.random()
0.3085301662360984
Math.random()*10
5.522153387579342
Math.random()*1000
932.4447577135697
Math.random()*100000
32226.162444819773

Math.floor()//Floor tends towards the lower number

Math.floor(12.2)
12
Math.floor(12.4)
12
Math.floor(12.7)
12
Math.floor(12.9)
12

syntax:Math.ceil()//Ceil tends towards the higher number

Math.ceil(15.12)
16
Math.ceil(15.4)
16
Math.ceil(15.8)
16

syntax:Math.round()//Roundoffs the number

Math.round(10.25)
10
Math.round(10.49)
10
Math.round(10.5)
11
Math.round(10.95)
11

<Note> //Random whole number

Math.random()*100000
24588.024743591784
Math.floor(Math.random()*100000)
58882
Math.ceil(Math.random()*100000)
13394
Math.round(Math.random()*100000)
30689

///To fix the decimal place

var a=10.2564
undefined
Math.round(a)
10
var a=10.2564
undefined
a.toFixed(2)
"10.26"
a.toFixed(3)
"10.256"
a.toFixed(4)
"10.2564"


Math.PI
3.141592653589793
Math.PI.toFixed(3) 
"3.142"
Math.PI.toFixed(4)
"3.1416"

<Interview Ques> ///How to generate random number within given range

Formula :-Math.floor(Math.random()*(max-min))+min

//To generate number within(10,20)
Math.floor(Math.random()*(20-10))+10
13
Math.floor(Math.random()*(20-10))+10
18
Math.floor(Math.random()*(20-10))+10
15
Math.ceil(Math.random()*(20-10))+10
12
Math.ceil(Math.random()*(20-10))+10
19

<Note> //Some Math.functions
    
Math.E
2.718281828459045
Math.pow(2,3)
8
Math.log(10)
2.302585092994046
Math.log(0)
-Infinity
Math.log(1)
0
Math.sqrt(25)
5
Math.sin(10)
-0.5440211108893698
Math.cos(0)
1