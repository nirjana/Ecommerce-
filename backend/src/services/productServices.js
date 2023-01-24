import Boom from "@hapi/boom";

import Product from "../models/productModel.js";

//Create Product-- only for Admin
export async function createProduct(data) {
  const product = data;

  const insertedData = await new Product().save(data);
  console.log("enset", insertedData);
  console.log(insertedData);

  return {
    data: insertedData,
    message: "Added Product sucessfully",
  };
}

//********************     Get all products   ********************//
export async function getAllProducts() {
  const insertedData = await new Product().findAllProduct();
  if (!insertedData) {
    console.log("Book not Found");
    throw Boom.badRequest("Book not Found");
  }
  return {
    data: insertedData,
    message: "Find all  Products sucessfully",
  };
}

//get product details
export async function getProductDetails(data) {
  const insertedData = await new Product().findproductById(data);
  console.log("enset", insertedData);
  console.log(insertedData);
  if (!insertedData) {
    console.log("Book not Found");
    throw Boom.badRequest("Book not Found");
  }
  return {
    data: insertedData,
    message: "Find Product sucessfully",
  };
}

//Update product  -- only for Admin
export async function updateProduct(id, data) {
  const insertedData = await new Product().updateById(id, data);
  if (!insertedData) {
    console.log("Book/product not Found");
    throw Boom.badRequest("Book/product not Found");
  }
  return {
    data: insertedData,
    message: "Update Product sucessfully",
  };
}

//Delete Product
export async function deleteProduct(id) {
  const returnedData = await new Product().deleteProductById(id);

  return {
    data: returnedData,
    message: "Succesfully deleted Product",
  };
}
