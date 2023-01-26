import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
import DBModel from './DBModel.js';

const { Schema } = mongoose;

const adminSchema = new Schema({
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
    required:true,
    trim:true
},
  email:{
    type: String,
    required:false,
    trim:true
},
}  
,{ timestamps: true });
const adminModel = mongoose.model("admin",adminSchema);

export default class Admin extends DBModel {
  constructor() {
    console.log("this admin",adminModel)
    super(adminModel)
  }
} 



