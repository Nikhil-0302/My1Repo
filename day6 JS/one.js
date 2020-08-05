

<< Loops  >>

1. For       ***
2. While 
3. Dowhile
4. For In
5. For Out
6. Map       ***
7. Filter    ***

--------------

//For Loop//

for(i=0;i<5;i++){
    console.log(i)
}
VM37:2 0
VM37:2 1
VM37:2 2
VM37:2 3
VM37:2 4
undefined


var city=['Indore','Bangalore',"Pune",'Mumbai']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
VM43:4 Indore
VM43:4 Bangalore
VM43:4 Pune
VM43:4 Mumbai
undefined

//While Lopp// first checks the condition

var i=0; 
while(i<5){
    console.log(i)
    i++;
}
output-->0 1 2 3 4 4
//for i=10  output--> No output

----------

//Dowhile//   Procedes first and then check the condition(lopp runs atleast ones)

var i=0;
do{
    console.log(i);
    i++;
}
while(i<5)

output-->0 1 2 3 4 4
//for i=10  output--> 10 

----------

//For of//  ES6  mainly used to iterate over the array

var color=['Red','Blue',"Green"]
for(abc of color){
    console.log(abc)
}
VM108:3 Red
VM108:3 Blue
VM108:3 Green
undefined

<<<<**********>>>>

/////Map//// helps to iterate over the data

> Return type of map is array and it always return same array length.

var a=[2,55,6,77,2,05,64]
a.map((num)=> {return num})

(7) [2, 55, 6, 77, 2, 5, 64]


var a=[2,55,6,77,2,05,64]
a.map((num)=> {return num*2})

(7) [4, 110, 12, 154, 4, 10, 128]



/////Filter///// helps to filter out the values

> Return type of filter is array but array length may vary.
> Return values for for which condition is satisfied.

var a =[2,,5,11,15,3,18,55,95,29,31]
a.filter((num) => { return num>30})
(3) [55, 95, 31]                         //// Array length varies

var a =[2,9,5,11,15,3,18,55,95,29,31]
a.filter((num) => { return num%3==0})
(4) [9, 15, 3, 18]


Note:

var a =[2,,5,11,15,3,18,55,95,29,31]
a.map((num) => { return num%3==0})   ///Incase of map, the length of the array remains the same
(11) [false, empty, false, false, true, true, true, false, false, false, false]


<<<< Interview Ques >>>>

     var a=[0,1,2,3]

1)  a.map((data) => {return data*2})
    output-->0,2,4,6  // [0, 2, 4, 6]    returns same array length

2)  a.filter((data) => {return data*2})
    output-->1,2,3   // [1, 2, 3]       returns only if condition is satisfied


    

    








