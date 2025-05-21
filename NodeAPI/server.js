let express =require('express') 
const app = express()


const defaultRoute = require("./route/defaultRoute")
const defaultApp = express(); 

const userRoute = require("./route/userRoute")
const userApp = express();

//const studentRoute = require("./route/student")

globalThis.rootPath = __dirname

app.use('/static',express.static('public'))


app.use("/user", userApp) 
userApp.use("/",userRoute)

//app mounting
app.use("/",defaultApp) 
defaultApp.use("/",defaultRoute) //redirecting all requests to default route to get served

//app.use("/student",studentRoute)


console.log("rest api is listening at 9000")

app.listen(9000)