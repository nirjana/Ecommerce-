import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({path : '../.env'});

export const connectDatabase = () => {
let uri = process.env.DB_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function (err) {
    if (err) throw err
    console.log("MongoDB database connection established successfully with mongoose");
})
}