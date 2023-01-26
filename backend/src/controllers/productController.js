import * as productService from "../services/productServices.js";

//Create Product-- only for Admin
export function createProduct(req, res, next) {
  const product = req.body;
  console.log("pro",req.body);
  productService
    .createProduct(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function getAllProducts(req, res, next) {
  const product = req.params;
  console.log("dsa",req.params)
  productService
    .getAllProducts(req.params)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
//get product details

export function getProductDetails(req, res, next) {
  const product = req.params.id;
  console.log("k bhaaa")
  productService
    .getProductDetails(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Update product  -- only for Admin

export function updateProduct(req, res, next) {
  console.log("req", req.params.id, req.body);

  productService
    .updateProduct(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

//Delete Product

export function deleteProduct(req, res, next) {
  console.log("req", req.params.id);
  productService
    .deleteProduct(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}