//create a constructor function to print user details add one information using prototype
var classA = function(name, age, city){ //constructor function
   this.name = name;
   this.age = age; 
   this.city = city;

   this.getDetails = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Job: ${this.job}`)
   };
}
var user1 =  new classA("Diya",30, "Boston")
user1.getDetails();
classA.prototype.job = "developer" //adding one info using prototype
user1.getDetails();