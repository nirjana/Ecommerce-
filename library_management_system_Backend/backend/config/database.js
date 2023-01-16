const mongoose = require("mongoose");



const connectDatabase =() =>{

/* MongoDB connection */
    
mongoose.connect(
    process.env.DB_URI,
    {
useNewUrlParser: true,
useUnifiedTopology: true,  //useCreateIndex: true
} 
).then((data)=>{

 console.log(`MONGODB CONNECTED ${data.connection.host}`);

})
// .catch((err) =>{
//     console.log(err)
// })

};

module.exports = connectDatabase


