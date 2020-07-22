
var city ='india'
undefined
city.toUpperCase()
"INDIA"
city.toLowerCase()
"india"

var city="aMsTerDAm" ///Convert 1st letter to Uppercase and rest to Lower(check further)

var city="Australia"
var city="Australia"
undefined
city[0]
"A"
city[5]
"a"
city[7]
"i"
city["length"]
9
city.length
9
city.charAt(2)
"s"


var city="Australia"
city.slice(1)
"ustralia"
city.slice(2)
"stralia"
city.slice(1,4)
"ust"

var city="Australia"
undefined
city.slice(-1)
"a"
city.slice(-2)
"ia"
city.slice(1)
"ustralia"
city.slice(1,-1)
"ustrali"
city.slice(1,-2)
"ustral"
city.slice(-1,-2)
""
city.slice(-3,-2)
"l"
city.slice(-4,-2)
"al"

var city="Australia"
undefined
city.slice(-5,-1)
"rali"
city.slice(-4,1)
""
city.slice(-0)
"Australia"
city.slice(0)
"Australia"

<Note>

var city="aMsTerDAm" ///Convert 1st letter to Uppercase and rest to Lower

var city="aMsTerDAm" 
undefined
city.charAt(0).toUpperCase()
"A"
city[0].toUpperCase()
"A"
city.slice(1)
"MsTerDAm"
city.slice(1).toLowerCase()
"msterdam"
city[0].toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam" //Output 

-------------


var city='India   '
undefined
city.length
8
city.trim()             /// helps to remaove extra spaces
"India"
city.trim().length
5

var city='India   .  '
undefined
city.length
11
city.trim()
"India   ."
city.trim().length
9

///Global Replace

var city='India   .  '
undefined
city.trim()
"India   ."
city.replace(/ /g,'')
"India."
city.replace(/ /g,'-')
"India---.--"


var data="I am learning JavaScript"    ///convert JavaScript into JS
    
undefined
data.replace('JavaScript','JS')
"I am learning JS"
data.replace('Javascript','JS') //case sensitive
"I am learning JavaScript"     

var data="I am learning JavaScript"   ////user enter in any form
undefined
data.toLowerCase()
"i am learning javascript"
data.toLowerCase().replace('javascript','JS')  //case sensitive mismatch will be replaced
"i am learning JS"

var data="JavaScript I am learning JavaScript" ///to convert all javascript to JS

var data="JavaScript I am learning JavaScript"
undefined
data.replace(/JavaScript/g,'JS')
"JS I am learning JS"