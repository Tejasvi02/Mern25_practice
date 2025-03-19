//create and example of overloading where you can attend 3 sessions on a day and 4 sessions on another
//print name of the sessions

Session("physics","Math","chem"); //it takes as 4 parameters, overloading doesn't work in js
//4th parameter is defaulted - undefined
//function hoisting

function Session(s1, s2, s3){
  console.log(`${s1} ${s2} ${s3}`);
  console.log("three sessions")
}

Session("cs","eng","dsa","js");
function Session(s1,s2,s3,s4)
{
   console.log(`${s1} ${s2} ${s3} ${s4}`);
   console.log("four sessions")
}

//both the sessions above here take four session/ prints four session

Session("xyz","uvw") //stll takes 4 beacuse of variable hoisting

var Session = function(s1,s2){
    console.log(`${s1} ${s2}`);
    console.log("takes two session")
}
Session("abc","cde") //now it has been overwritten

//importing data from object_practice
var {chain,bag}= require('./object_practice')
console.log(chain)
console.log(bag)
//prints the properties of chain and bag object exported from object_practice.js