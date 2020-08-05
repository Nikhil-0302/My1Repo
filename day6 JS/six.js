
/// Functional Objects

function lang(name,state) {
    this.name=name;
    this.state=state;
    this.add =(a,b) => {return a+b}
}

var kannada = new lang('Kannada','Karnataka')
undefined
kannada
lang {name: "Kannada", state: "Karnataka", add: ƒ}
kannada.add(4,6)
10


///////  ES6   /////// same as above using class

class language{
    constructor(name,state){
        this.name=name;
        this.state=state;
    }

    add(a,b){
        return a+b
    }
}

undefined
var eng =new language('Hindi',"Mumbai")
undefined
eng
language {name: "Hindi", state: "Mumbai"}
eng.add(5,2)
7

--------------<<<<<<<<<<<THE END of JS>>>>>>>>>>>>-----------------------

Understanding JS is very IMP


<<<***IF U WANT TO READ MORE GO TO W3SCHOOL***>>>
