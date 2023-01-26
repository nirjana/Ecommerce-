import mongoose from "mongoose";
import DBModel from "./DBModel.js";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter product  description"],
  },

  price: {
    type: Number,
    required: [true, "please enter product  Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  authorName: {
    type: String,
    // required:[true,"please enter Author name"],
    trim: true,
  },

  rating: {
    type: Number,
    required:false,
    default: 0,
  },

  //to add multiple images , array of images
  // images: [
  //   {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },

  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  images: {
    type:String,
    required:true,
  }
,
  category: {
    type: String,
    required: [true, "please enter product category"],
  },

  stock: {
    type: String,
    required: [true, "please enter product category"],
    maxLength: [4, "stock cannot exceed 4 characters"],
    default: 1,
  },

  // numOfReviews: {
  //   type: Number,
  //   default: 0,
  // },
  // reviews: [
  //   {
  //     name: {
  //       type: String,
  //       requiredd: true,
  //     },
  //     rating: {
  //       type: Number,
  //       requiredd: true,
  //     },

  //     comment: {
  //       type: String,
  //       requiredd: true,
  //     },
  //   },
  // ],


}
,{ timestamps: true });
const productModel = mongoose.model("product", productSchema);

export default class Product extends DBModel {
  constructor() {
    console.log("this User", productModel);
    super(productModel);
  }
}