import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
import DBModel from './DBModel.js';
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    id: {
      type: String,
      // required:false,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: false,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Your email "],
      minLength: [5, "Name should have more then 5 character"],
      select: false,
      //When the "select: false" option is used on the "password" field, it means that the field will not be included in the result set when querying the database
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
  },
  { timestamps: true }
);



  //we cant use this function inside arrow function=>()so we use function
adminSchema.pre("save",async function(next){

  if (!this.isModified("password")) {
    //passsword is not  modified then dont hash the password again
    next();
  }
  //change password case
  this.password = await bcrypt.hash(this.password, 10); //10 indicate the password is strong
})


//use of JWT token
adminSchema.methods.getJWTToken =  function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn: 5,                        //method of userSchema
  })
}

//compair the password 

adminSchema.methods.comparePassword = async function(enteredPassword){
  const abc = await bcrypt.compare(enteredPassword, this.password);
  return abc
  //  return bcrypt.compare(enteredPassword,hashed password which is in database already)
}



const adminModel = mongoose.model("admin",adminSchema);

export default class Admin extends DBModel {
  constructor() {
    console.log("this admin",adminModel)
    super(adminModel)
  }
} 



