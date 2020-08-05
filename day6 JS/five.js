
/// Concept of **this operator**

var firstname= "Jeff"
var lastname= "Bezos"

var sayhi = {
    firstname :"John",
    lastname :"Michel",
    greet: function(){
        return `Say hi to ${this.firstname} ${this.lastname}`   //this keyword-> Helps to access the local/same scope
    }
}

console.log(sayhi.greet())

//Output--->Say hi to Jeff Bezos  ///Always looks for global scope

//Output--->Say hi to John Michel /// after using this keyword

 