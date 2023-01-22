const User = require("../models/userModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");

// to register the User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is sample id",
      url: "profile_Url",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    succes: true,
    user,
    token,
  });
});

//Login User
exports.loginuser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //check if user has given password or email both

  if (!email || !password) {
    return next(new ErrorHander("Please enter email and password ", 400));
  }

  //email:email lekhnu and email matra lekhnu same huncha
  //email and password both need to match
  //password is select = false in mongoose so we need to use +password  to check and find match password
  const user = await User.findOne({ email: email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password "), 401);
  }

  const isPasswordMatched = user.comparePassword(password); //to check the input password with database ma vayeko password

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password "), 401); //401 unauthorized
  }

  const token = user.getJWTToken();
  //Options for cookie(save token in cookeis)
  const options = {
    expires: new Date(Date.now() + 25892000000), //25892000000 = 30 days
    httpOnly: true,
  };
  res.status(200).cookie("token", token, options).json({
    succes: true,
    user,
    token,
  });
});

exports.loginWithCookie = catchAsyncErrors(async (req, res, next) => {
  //get the token from cookie
  const { token } = req.cookies;
  console.log(token);
});

//LogOut

exports.logout = catchAsyncErrors(async (req, res, next) => {
  //clear the token from cookie
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logout Successful!",
  });
});
