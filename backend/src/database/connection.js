import mongoose from "mongoose";

export const connectDatabase = () => {
let uri = "mongodb://localhost:27017/Librarydb";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function (err) {
    if (err) throw err
    console.log("MongoDB database connection established successfully with mongoose");
})
}