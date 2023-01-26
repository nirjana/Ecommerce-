import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
import DBModel from './DBModel.js';
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required:false,
        trim:true
    },
  name: {
    type: String,
    required:true,
    trim:true
}, 
  username: {
    type: String,
    required:true,
    trim:true
},
  address:   {
    type: String,
    required:false,
    trim:true
},
  password:{
    type: String,
    required: [true, "Please Enter Your PAssword "],
    minLength: [2, "Name should have more then 5 character"],
    select: false,
},
  email:{
    type: String,
    required:false,
    trim:true
},
}  
,{ timestamps: true });

  const userModel = mongoose.model("user",userSchema);

export default class User extends DBModel {
  constructor() {
    console.log("this admin", userModel)
    super( userModel)
  }
} 

//we cant use this function inside arrow function=>()so we use function
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    //passsword is not  modified then dont hash the password again
    next();
  }
  //change password case
  this.password = await bcrypt.hash(this.password, 10); //10 indicate the password is strong
});

//use of JWT token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE, //method of userSchema
  });
};

//compair the password

userSchema.methods.comparePassword = async function (enteredPassword) {
  const abc = await bcrypt.compare(enteredPassword, this.password);
  return abc;
  //  return bcrypt.compare(enteredPassword,hashed password which is in database already)
};

