import {Router} from 'express';
// import * as bookController from "./controllers/books.js"
import * as adminController from "./controllers/adminController.js";
import addAdminSchema from "./schemas/addAdmin.js"
import { validateBody } from './middleware/validation.js';
import authenticate from './middleware/authenticate.js';
import * as dotenv from "dotenv";
dotenv.config({path : '../.env'});

const router = Router();
console.log("authbhitra786",process.env.TOKEN_SECRET)
// router.get('/',(req,res,next) => {
// res.send("hiii successful")})
router.get('/',adminController.getAllAdmins)

router.post('/',authenticate,validateBody(addAdminSchema),adminController.addAdmin)

router.patch('/:adminIdentifier',adminController.updateAdmin)

router.delete('/:adminIdentifier',adminController.deleteAdmin)

router.post('/adminLogin', adminController.login)

// router.post('/', bookController.addBook)

export default router;