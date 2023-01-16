const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error")


app.use(express.json())
//Router Imports

const product = require("./routes/productRoute");
app.use("/api/v1",product);            //give route of product 


//Middleware for error
app.use(errorMiddleware);
module.exports = app     


