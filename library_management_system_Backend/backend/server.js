const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//console.log(google);output:ReferenceError: google is not defined //video 1:20:00
//handling uncaugh exception (eg: google wala error)


process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to uncaughtException`);
    process.exit(1)
})

//config
dotenv.config({path:"./config/config.env"})


//connecting databse

connectDatabase()

const server= app.listen(process.env.PORT,() =>{

    console.log(`server is working on port :${process.env.PORT}`)

})

//unhandled promise rejection(examgle :when we give wrong string for mongoose url)

process.on("unhandledRejection",err=>{
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down the server due to unhandled promise rejection`);
     server.close(()=>{
        process.exit(1);
     });
    });