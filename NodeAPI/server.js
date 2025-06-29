let express =require('express') 
const app = express()


const defaultRoute = require("./route/defaultRoute")
const defaultApp = express(); 

const userRoute = require("./route/userRoute")
const userApp = express();

//const studentRoute = require("./route/student")

const productRoute = require("./route/productRoute")
const productApp = express();

const cartRoute = require("./route/cartRoute");
const cartApp = express();

const orderRoute = require("./route/orderRoute");
const orderApp = express();

//calling the cors instance 
const cors = require("cors");

globalThis.rootPath = __dirname

 
//allowing the cross origin resource sharing
app.use(cors())//using cors middleware to allow resource sharing with different ports in localhost

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public'))

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 


app.use("/user", userApp) 
userApp.use("/",userRoute)


app.use("/product", productApp) 
productApp.use("/",productRoute)

app.use("/cart", cartApp) 
cartApp.use("/",cartRoute)

//app mounting
app.use("/",defaultApp) 
defaultApp.use("/",defaultRoute) //redirecting all requests to default route to get served

//app.use("/student",studentRoute)
app.use("/order", orderApp);
orderApp.use("/", orderRoute);

console.log("rest api is listening at 9000")
app.listen(9000)