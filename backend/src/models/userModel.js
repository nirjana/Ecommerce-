import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
import DBModel from './DBModel.js';
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, "Please Enter Your Name "],
      maxLength: [30, "Name cannot exceed 30 character"],
      minLength: [3, "Name should have more then 3 character"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your email "],
      // `email` must be unique
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
  
    password: {
      type: String,
      required: [true, "Please Enter Your email "],
      minLength: [5, "Name should have more then 5 character"],
      select: false, 
      //When the "select: false" option is used on the "password" field, it means that the field will not be included in the result set when querying the database
    },
  
    //to add avatar images
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
  
      url: {
        type: String,
        requiredd: true,
      },
    },
  
    role: {
      type: String,
      default: "user",
    },
  
    resetPasswordToked: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true });

  const userModel = mongoose.model("user",userSchema);

export default class User extends DBModel {
  constructor() {
    console.log("this admin", userModel)
    super( userModel)
  }
} 

//use of JWT token
userSchema.methods = {
    ...userSchema.methods,
    getJWTToken() {
      return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
      });
    }
  };
  
  
  //compair the password 
  
  userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
    //  return bcrypt.compare(enteredPassword,hashed password which is in database already)
  }

