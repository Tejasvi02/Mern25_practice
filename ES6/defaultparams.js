//create and example of multiplication using default params
function Multiply(p1=20, p2=10){
    return p1*p2
}

console.log(`Product of default values: ${Multiply()}`)
console.log(`Product with updated param p1: ${Multiply(7)}`)
console.log(`Product with updated param p2: ${Multiply(7,2)}`)
console.log(Multiply(4,5,6)) //no error, just returns as per defined, p1*p2