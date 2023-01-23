import Boom from "@hapi/boom";

import User from "../models/UserModel.js"
import { hash, compare, createToken } from '../utils/crypt.js';

export async function registerUser(data) {
    const {name,password,email,avatar} =data;

    const existingUser = await new User().findByParams(data);
    console.log("esi",existingUser)
    if (existingUser) {
        console.log("user already exist")
        throw Boom.badRequest('User already exist');
    }

    const insertedData = await new User().save(data);
    console.log("enset",insertedData)

    const token = insertedData.getJWTToken();
    //Options for cookie(save token in cookeis)
    const options = {
      expires: new Date(Date.now() + 25892000000), //25892000000 = 30 days 
      httpOnly: true,
    };

    return {
        data: insertedData,
        message: 'Added User sucessfully',
        token: token
    }
}





 