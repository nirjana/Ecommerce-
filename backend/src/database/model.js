import mongoose from "mongoose";
let uri = "mongodb://localhost:27017/Librarydb";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function (err) {
    if (err) throw err
    console.log("MongoDB database connection established successfully with mongoose");
})
const { Schema } = mongoose;

const adminSchema = new Schema({
    id: Number,
  name:  String, // String is shorthand for {type: String}
  username: String,
  address:   String,
  password:String,
  email:String,
}  
,{ timestamps: true });
const Admin = mongoose.model("Admin",adminSchema);

const saveAdmin = async (id,name,username,address,password,email) => {
    let a = new Admin ({
        id: id,
        name: name,
        username:username,
        address:address,
        password:password,
    })
}

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 8 },
},
{ timestamps: true },
{
    collection : "stu"
},
);

// Student model
const Student = mongoose.model("Student", studentSchema);

// Creating Student document from Model

// Function to save in database
export const saveStudent = async (name, age) => {
let s = new Student({
    name: name,
    age: age,
});
await s.save().then((doc) => {
    console.log("Name:", doc.name, ", Age:", doc.age);
    console.log("Created At:", doc.createdAt);
    console.log("Updated At:", doc.updatedAt);
});
};
  
export const updateStudent = async () => {
    let doc = await Student.findOneAndUpdate(
        { name: "RERER" },
        { age: 25 },
        { new: true }
    );
    console.log("doc",doc)
    // console.log("Name:", doc.name, ", Age:", doc.age);
    // console.log("Created At:", doc.createdAt);
    // console.log("Updated At:", doc.updatedAt);
};


