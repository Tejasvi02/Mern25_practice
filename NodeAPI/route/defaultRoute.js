let expressObj = require("express") 
let router = expressObj.Router({})

router.get('/', (req, res) => {
    res.send('Hello World')
  })

router.get('/new', (req, res) => {
      res.send("<h1>I know express is powerful</h1>")
  })
  
  //Route param
  //http://localhost:9000/test/2500?name=test&session=queryString 
  //here in the above url 2500 is the id
  //can also have  http://localhost:9000/test/2500 - since here we are not using queryString
router.get('/test/:id', (req, res) => {
      console.log(req.params["id"])
      console.log(req.query)
      res.json({
         server : "Express" ,
         endpoint: "Test",
         api : "Restful"
      })
  })
  
  //http://localhost:9000/queryString?name=test&session=queryString
router.get('/queryString', (req, res) => {
      console.log(req.query)
      res.json({
         server : req.query["Name"], //to get the value of the key name
         endpoint: req.query["Session"],
         api : "Restful"
      })
  })
  
router.get('/hello',(req,res)=>{
      //res.sendFile(__dirname+"/public/index.html") - can't use __dirname instead global rrotpath and use it here
      res.sendFile(globalThis.rootPath+"/public/index.html")
  })

// //Wild Card Operator
// router.all('*', (req, res) => {
//     res.sendFile(globalThis.rootPath + "/public/notFound.html");
// });


  module.exports = router;