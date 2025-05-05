const expressObj = require("express")
let router = expressObj.Router({})
//had to comment wild card in default to make this work

//1. simple api /student
//localhost:9090/student
router.get('/',(req,res)=>{
    res.send("Welcome to the Student Route");
})

//2. router param
//localhost:9090/student/345
router.get('stdId/:id',(req,res)=>{ //tried with just /:id - was clashing with query string, the query string url also behaved like id
    console.log(req.params["id"])
    res.send("student of the given id found");
})

//3. Query String
//http://localhost:9000/student/queryString?name=John&course=Math
router.get('/queryString', (req, res) => {
    console.log(req.query)
    res.json({
       name : req.query["Name"], 
       course: req.query["Course"],
       message : "Query String api of student"
    })
    //we can also get the info like below
    // const userinfo 
})

//4. Sending file as response
//http://localhost:9000/student/studenthtml
router.get('/studenthtml', (req, res) => {
    res.sendFile(globalThis.rootPath + "/public/student.html");
});

//5. displaying student detail - json object
//http://localhost:9000/student/details
router.get('/details', (req, res) => {
    res.json({
        firstName: "Tej",
        lastName: "KK",
    });
});


module.exports = router;
