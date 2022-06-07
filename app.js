const express = require("express")
const app = express() 
const port = process.env.PORT || 5000;
const expreshandler = require("express-handlebars")
const bodyparser = require("body-parser")
const handlebars = expreshandler.create({extname:"hbs"})
require("dotenv").config();
app.engine("hbs",handlebars.engine);
app.set("view engine","hbs")
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.static("public"))
app.listen(port,()=>{console.log("connected")})


const router = require("./server/routes/users")
app.use("/",router)

