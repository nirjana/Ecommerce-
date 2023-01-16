import {Router} from 'express';
import * as bookController from "./controllers/books.js"

const router = Router();

router.get('/',(req,res) => {
    res.send('Hello World')
})

router.post('/', bookController.addBook)

export default router;