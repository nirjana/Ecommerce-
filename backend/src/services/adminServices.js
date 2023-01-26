import Boom from "@hapi/boom";
import { registerAdmin } from "../controllers/adminController.js";

import Admin from "../models/adminModel.js"
import { hash, compare, createToken } from '../utils/crypt.js';

export async function saveAdmin(data) {
    const { id ,name,username,address,password,email} =data;

    const existingUser = await new Admin().findByParams(data);
    console.log("esi",existingUser)
    if (existingUser) {
        console.log("user already exist")
        throw Boom.badRequest('User already exist');
    }

    const insertedData = await new Admin().save(data);
    console.log("enset",insertedData)
    const token = insertedData.getJWTToken();

    return {
      data: insertedData,
      message: "Added Admin sucessfully",
      token,
    };
}

export async function getAllAdmins() {
    const returnedData = await new Admin().getAll();

    return {
        data: returnedData,
        message: 'Succesfully fetched all data'
    }
}

export async function updateAdminById(id,data) {
    const returnedData = await new Admin().updateById(id,data);

    return {
        data: returnedData,
        message: 'Succesfully updated admin'
    }
}

export async function deleteAdminById(id) {
    const returnedData = await new Admin().deleteById(id);

    return {
        data: returnedData,
        message: 'Succesfully deleted admin'
    }
}

/**
 * Login validation and token generation.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function login(params) {
    const { username, password } = params;
   console.log("uu",username,password,params)

     if (!username || !password) {
       return {
         message: "Please enter username and password",
       };
          }


    const existingUser = await new Admin().findByUsername(username, password);
    console.log("exist",existingUser);
    if (!existingUser) {
   
      throw new Boom.badRequest('Invalid credentials');
    }
 
   const isPasswordMatched = await existingUser.comparePassword(password); //to check the input password with database ma vayeko password
   console.log(isPasswordMatched + `PasswordMatched`);

   if (!isPasswordMatched) {
     return {
       message: "Invalid email or (password)",
     };

     //  return next(new ErrorHander("Invalid email or password "), 401); //401 unauthorized
   }

    // const tokenJWT = existingUser.getJWTToken();
    const user = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      currentUser: 'admin'
    };
  
    // const token = createToken(user);
  
    return {
      data: {  user },
      message: "Admin Logged in succesfully",
    };
  }

