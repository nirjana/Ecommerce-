import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import router from "./src/routes.js";

const app = express()

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})