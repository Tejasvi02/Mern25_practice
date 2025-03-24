//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

let vaccines =["moderna","rubella","fluvaccine"]
console.log(...vaccines); //printing using spread

let doctor ={
    Name: "Srini",
    ID: 78972,
    Hospital:"Apollo",
    Qualification: "MBBS, MD"
};
console.log({...doctor}); //{} is important for accesing the object using spread

let vaccine = {
    Name: "Covid sheild",
    Doses: 3,
    Price: 45
};

let mergingWDoctor = {...vaccine,...doctor}; //the doctor name overwrites the vaccine name, since doctor is the recently called
console.log(mergingWDoctor)



//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

function arrayGen(start,end){
 let arr =[]
 for(let i=start;i<=end;i++){
    arr.push(i);
 }
 return arr;
}

let arrayOfNums= arrayGen(100,150);
console.log(...arrayOfNums);

//large sum funtion
function LargeSum(...arr) {
    let sum = arr.reduce((total, current) => total + current, 0);
    console.log("Sum:", sum);
  }

LargeSum(...arrayOfNums)