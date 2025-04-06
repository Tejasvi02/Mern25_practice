//js-executor
//database <--- api(node) <----- data(frontend)

//commented few log to maintain readability uncomment to check the printed output

//require is a keyword with which we can access the base modules, modules which are already installed in the machine while installing node package

let httpObj = require("http") //node.http module is present when we installed nodejs
//httpObj.get() - commented out to execute the remaining like we can't access the belwo fs.readFile while this is present on the same port

let fs = require("fs") //fs reads or retrives the file
//let fileData = fs.readFile('defaultparams') - can't be done like this, since fs is a callback funtion

//node system modules have error first approch for their callbacks
//readfile() syntax : fs.readFile(path[, options], callback)
fs.readFile('defaultparams.js',"utf-8",(err,fileData)=>{
    console.log(err)
   // console.log(fileData)
})

//other modules
let { log } = require("console")

log(__dirname) //gives absolute path of directory the file is in
//C:\Synergistic\Mern\Mern25_practice\ES6
log(__filename) //gives absolute path of directory the file is in with the current filename
//C:\Synergistic\Mern\Mern25_practice\ES6\node_bsc.js

//creating and reading global object
let gobj = require("./forof_forin.js")
log(globalThis.userInfo) //the defined name and session will be printed in the console since we use require("console") and this will be printed first and later the console.log
//the global object can be accessed throughout the appilcation
//refer forinforof where we exported

let osObj = require("os")
//log(osObj.cpus()) //to get the cpus - this is a function in the os global object where as uerInfo is property not a function


//Event emitter is used to create custom event apart from having traditional ones like get etc
const {EventEmitter} = require('events') //this is used and EventEmiiter.<eventname> etc can be used to createe it, refer example in mern25 folder

//utility module
const util = require('util') //in this we have debaglog etc

//v8 info and functions

const v8 = require('v8');
log(v8)

let path = require('path')
//path
console.log(`The file name is - ${path.basename(__filename)}`);
console.log(`The file name is abosolute - ${path.isAbsolute(__dirname)}`);
console.log(`The resolved file name is - ${path.resolve(__filename)}`);


