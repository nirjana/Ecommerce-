const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim: true,
    },
     description:{
        type:String,
        required:[true,"please enter product  description"],
    },

      price:{
        type: Number,
        required:[true,"please enter product  Price"],
        maxLength :[8,"Price cannot exceed 8 characters"],
    },
     authorName:{
        type:String,
        // required:[true,"please enter Author name"],
        trim: true,
    },

    rating :{
        type: Number ,
        default:0,
    },

    images:              //to add multiple images , array of images 
    [
        {
        public_id:{
            type:String,
            required: true,
        },
         
          url:{
            type:String,
            required: true,
        }
    }
    ],

    category:{
        type:String,
        required:[true,"please enter product category"],

    },


        Stock:{
        type:String,
        required:[true,"please enter product category"],
        maxLength:[4,"stock cannot exceed 4 characters"],
        default: 1

    },


    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                requiredd:true,
            },
            rating:{
                type:Number,
                requiredd: true,
            },

            comment:{
                type:String,
                 requiredd: true,


            }
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now

    }


})

module.exports = mongoose.model("Product",productSchema)