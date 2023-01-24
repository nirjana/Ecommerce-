import Boom from "@hapi/boom";

import User from "../models/userModel.js";
import { hash, compare, createToken } from "../utils/crypt.js";

export async function registerUser(data) {
  const { name, password, email, avatar } = data;

  const existingUser = await new User().findByParams(data);
  console.log("esi", existingUser);
  if (existingUser) {
    console.log("user already exist");
    throw Boom.badRequest("User already exist");
  }

  const insertedData = await new User().save(data);
  console.log("enset", insertedData);

  const token = insertedData.getJWTToken();
  return {
    data: insertedData,
    message: "Added User sucessfully",
    token,
  };
}

//login user
export async function loginUser(data) {
  const { password, email } = data;

  if (!email || !password) {
    return {
      message: "Please enter email and password",
    };
    // return next(new ErrorHander("Please enter email and password ", 400));
  }

  //email:email lekhnu and email matra lekhnu same huncha
  //email and password both need to match
  //password is select = false in mongoose so we need to use +password  to check and find match password
  const user = await new User().findByData(email, password);
  //   const user = await User.findOne({ email: email }).select("+password");
  console.log(password);

  if (!user) {
    return {
      message: "Invalid email or password (user)",
    };
    // return next(new ErrorHander("Invalid email or password "), 401);
  }

  const isPasswordMatched = await user.comparePassword(password); //to check the input password with database ma vayeko password
  console.log(isPasswordMatched + `PasswordMatched`);

  if (!isPasswordMatched) {
    return {
      message: "Invalid email or (password)",
    };

    //  return next(new ErrorHander("Invalid email or password "), 401); //401 unauthorized
  }

  const token = user.getJWTToken();
  return {
    data: email,
    password,
    message: "Login sucessful",
    token,
  };
}

//loginWithCookie

export async function loginWithCookie(data) {
  const token = data;
  if (!token) {
    return {
      message: "You are not logged in! Please log in to get access",
    };
  }

  //verify the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //find the user by token
  const currentUser = await User().findById(decoded.id);

  if (!currentUser) {
    return {
      message: "The user belonging to this token does no longer exist.",
    };
  }
}

export async function logout() {
  return {
    success: true,
    message: "Logout Successful!",
  };
}
