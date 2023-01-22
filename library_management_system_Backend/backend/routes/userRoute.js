const express = require("express");
const {
  registerUser,
  loginuser,
  // protect,
   logout,
  // loginWithCookie,
} = require("../controllers/userController");
const router = express.Router();


router.route("/register").post(registerUser)
router.route("/login").post(loginuser);
// router.route("/login-with-cookie").get(loginWithCookie);
router.route("/logout").get(logout);

module.exports = router;

