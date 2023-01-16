//this middleware is used in app.js file 

const ErrorHandler = require("../utils/errorhander")

module.exports =(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500 ;
    err.message =err.message ||"Internal Server Error";

//When we give large or small value(wrong) for Id it will give error , So we need to handle this error:

if(err.name === "CastError"){
    const message = `Resource not found.Invalid: ${err.path}`;
    err = new ErrorHandler(message,400);

}



res.status(err.statusCode).json({
        success:false,
        message:err.message
       // error:err.stack,

    });
};