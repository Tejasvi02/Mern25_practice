let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];
//1. List the person with javascript tag
let personWtJs = persons.filter(personobj => personobj.tags == "javascript")
console.log(personWtJs)

//2. List the name of person using java and put programmer after their name, change the name key to Developer

let nameJava = persons.map((personobj)=> {
    if(personobj.tags == "java")
    {
        return {"Developer" :  personobj.name + " programmer"}
    }
}).filter((names)=>names!= undefined)

console.log(nameJava);

//3. If we have anyone with tag python
let personWtPython = persons.some(personobj => personobj.tags == "python") 
console.log(personWtPython) // returns false because there is no one with tag python
//filter in this case will return empty array

//4. Find the number of unique tags and their count present in list
let uniquetags = persons.reduce((prevVal, currVal, index, array)=>{
    prevVal[currVal.tags] = prevVal[currVal.tags]? prevVal[currVal.tags] + 1 : 1
    return prevVal;
}, []);

console.log(uniquetags)