// const { request } = require("express");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");



//Create Product-- only for Admin

exports.createProduct = catchAsyncErrors(async(req,res) =>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
       product
    });

});

// exports.createProduct = async(req,res,next) =>{
//     const product = await Product.create(req.body);

//     res.status(201).json({
//         success:true,
//         product
//     });

// };


//********************     Get all products   ********************// 
exports.getAllProducts = catchAsyncErrors(async(req,res) =>{
   const apiFeature =new  ApiFeatures(Product.find(), req.query)
   .search()   //req.query.keyword
   .filter()  ;         


   const products = await apiFeature.query;


//    const products = await Product.find(); //query

    res.status(200).json({

        success:true,
        products
    });

});

//get product details //pass the error into an Express error handler with the next argument.

exports.getProductDetails = catchAsyncErrors(async(req,res,next) =>{ 
    const product = await Product.findById(req.params.id);
    
     if(!product){
       return next(new ErrorHander("Book not found",404));                                //// Passes errors into the error handler
     }

// if(!product){
//         return res.status(500).json({
//             success:false,
//             message:"Product/Book not found"
//         })
//      }

     
    
   


 res.status(200).json({
        success:true,
           product 

    })
});

//Update product  -- only for Admin

exports.updateProduct = catchAsyncErrors(async(req,res,next)=>{
    let product = Product.findById(req.params.id); // to get product by using id
    
    
    if(!product){
       return next(new ErrorHander("Book not found",404));
     }


    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,
        runValidator: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success:true,
        product
    })
});


//Delete Product

exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

   if(!product){
       return next(new ErrorHander("Book not found",404));
     }

    await product.remove();
    res.status(200).json({
        success:true,
            message:"Product deleted successfully"

    })
});