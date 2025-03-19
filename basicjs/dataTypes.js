//data types are used to distinctly identify the category/size/allocation of data assigned

//six distinct types present in javascript
//number, string, boolean, undefined, object
//null as value 

var myVar = 1000
console.log("the value we have is - ", myVar)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(myVar)) //type is - number

myVar = 10.009
console.log("the value we have is - ", myVar)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(myVar)) //type is - number

xvar = 100; //no declaration is neccessary in js since variables are dynamic
console.log(xvar);

myVar = "Tejasvi"

console.log("the value we have is - ", myVar)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(myVar)) //type is - string

myVar = true
console.log("the value we have is - ", myVar)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(myVar)) //type is - boolean


myVar = undefined // undefined - is a valid type as well as a default value to any literal
console.log("the value we have is - ", myVar)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(myVar)) //type is - undefined

myVar = { name : "JeremiahDy" } //json, object
console.log("the value we have is - ", myVar)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(myVar)) //type is - object



myVar = null // null - is also a valid data but its data type is object
console.log("the value we have is - ", myVar)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(myVar)) //type is - object


//symbol
// another type of data type is introduced in ES6

var mySymbol = Symbol("MyNewDataType")

console.log(mySymbol)

var defvar;
console.log("the type of defvar is - ", typeof(defvar));

