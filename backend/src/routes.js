import {Router} from 'express';
// import * as bookController from "./controllers/books.js"
import * as adminController from "./controllers/adminController.js";
import * as userController from "./controllers/userController.js";
import * as productController from "./controllers/productController.js";
import addAdminSchema from "./schemas/addAdmin.js"
import { validateBody } from './middleware/validation.js';
import authenticate from './middleware/authenticate.js';
import jwt from 'jsonwebtoken'
import { expressjwt as ejwt } from "express-jwt"
import * as dotenv from "dotenv";
dotenv.config({path : '../.env'});

const router = Router();
console.log("authbhitra786",process.env.TOKEN_SECRET)
// router.get('/',(req,res,next) => {
// res.send("hiii successful")})


router.get('/',adminController.getAllAdmins)

// router.post('/',authenticate,validateBody(addAdminSchema),adminController.addAdmin)
router.post('/login',adminController.login)

router.post('/register',adminController.registerAdmin)

router.put('/:adminIdentifier',adminController.updateAdmin)

router.delete('/:adminIdentifier',adminController.deleteAdmin)

router.post('/userLogin',userController.login)

router.post('/userRegister',userController.registerUser)
router.post("/userRegister/checkout", userController.registerUser);

router.get("/users", userController.getAllUsers);

router.put('/:userIdentifier',userController.updateUser)

router.delete('/users/:userIdentifier',userController.deleteUser)

router.get("/users/:userIdentifier", userController.getUserDetails);

router.get("/products", productController.getAllProducts);

router.post(
    "/products",
    // userController.loginWithCookie,
    // authenticate,
    productController.createProduct
  );
  router.get("/products/:id",productController.getProductDetails);

  router.put("/products/:id", productController.updateProduct);

  router.delete("/products/:id", productController.deleteProduct);


export default router;