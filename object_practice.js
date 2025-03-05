// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

var Person = {
    FirstName : "Tej",
    LastName : "K",
    Country : "India",
    getPerson : function(){
        return `First name : ${this.FirstName}
                Last name : ${this.LastName}
                Country: ${this.Country}`
    }
}
console.log(Person.getPerson()) //doesn't reflect the change by person2 as this executes first

var Person1 = Object.create(Person) //creating object of Person
Person1.FirstName ="Joey"
Person1.Country ="USA"

var Person2 = new Object(Person) //overwrites the original object
Person2.Country = "Canada"


// var Person3 = new Person()
// console.log(Person3.getPerson())
//above doesn't work and gives an error that Person is not a constructor

console.log(Person.getPerson())
console.log(Person1.getPerson())
console.log(Person2.getPerson())


//merging
var chain = {color: "gold", price:50, month: "Aug" }
var bag ={color:"blue"}
var ring = {color:"pink" ,price:70}

var merged = {};

merged = Object.assign({},chain,bag,ring) //to merge all the common field, takes the lastest
console.log(merged)


//Closure
function Printthis(){
    var a = 10;
    function innerprint(){
        console.log(a)
    }
    return innerprint;
}

var tryprint= Printthis(); //prints value of a, innerprint will have access to a defined in outer function Printthis()
tryprint();
// above also can be written as Printthis()()


//Object export to overloading practice
module.exports = { chain, bag };