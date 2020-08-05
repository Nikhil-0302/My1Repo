

/// Defining methods inside the object

var calc = {
    name : 'Calculator',
    add : function(a,b){return a+b},
    sub : (a,b) => {return a-b}
}
 
undefined
calc
{name: "Calculator", add: ƒ, sub: ƒ}
typeof(calc)
"object"
calc.add(2,8)
10
calc.sub(15,30)
-15
calc.sub(45,10)
35




var dbquery={
    find:(table) => {return `Select from ${table}`},
    insert:(table,dbobj) => {return `Insert into ${table} name, city Values(${dbobj.name}, ${dbobj.city})`}
}
//To avoid writing code again and again
undefined
dbquery.find("Employee")
"Select from Employee"
dbquery.insert("Student",{name:'Niki',city:'Bangalore'})
"Insert into Student name, city Values(Niki, Bangalore)"






<<<<< Closures >>>>>   ////Local and Global scope








