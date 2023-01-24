import { Router } from "express";
// import * as bookController from "./controllers/books.js"
import * as adminController from "./controllers/adminController.js";
import * as userController from "./controllers/userController.js";
import * as productController from "./controllers/productController.js";
import addAdminSchema from "./schemas/addAdmin.js";
import { validateBody } from "./middleware/validation.js";
import authenticate from "./middleware/authenticate.js";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const router = Router();
console.log("authbhitra786", process.env.TOKEN_SECRET);
// router.get('/',(req,res,next) => {
// res.send("hiii successful")})
router.get("/", adminController.getAllAdmins);

router.post(
  "/",
  authenticate,
  validateBody(addAdminSchema),
  adminController.addAdmin
);

router.patch("/:adminIdentifier", adminController.updateAdmin);

router.delete("/:adminIdentifier", adminController.deleteAdmin);

router.post("/adminLogin", adminController.login);

router.post("/userRegister", userController.registerUser);
router.post("/userLogin", userController.loginUser);

router.get("/logout", userController.logout);
// router.post("/products/new" ,userController.loginWithCookie);
// router.post('/', bookController.addBook)

//Product
router.post(
  "/products/new",
  // userController.loginWithCookie,
  productController.createProduct
);
router.get("/products/:id", productController.getProductDetails);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get("/products/", productController.getAllProducts);

export default router;
