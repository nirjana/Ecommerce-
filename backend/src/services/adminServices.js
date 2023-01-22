import Boom from "@hapi/boom";

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

    return {
        data: insertedData,
        message: 'Added Admin sucessfully'
    }
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
    const { email, password } = params;
//    console.log(email,password,params)
    const existingUser = await new Admin().findByParams(params);
  
    if (!existingUser) {
   
      throw new Boom.badRequest('Invalid credentials');
    }
    const doesPasswordMatch = compare(password, existingUser.password);
    console.log(doesPasswordMatch)
    if (!doesPasswordMatch) {
  
      throw new Boom.badRequest('Invalid credentials');
    }
  
    const user = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      currentUser: 'admin'
    };
  
    const token = createToken(user);
  
    return {
      data: { token, user },
      message: 'Admin Logged in succesfully',
    };
  }