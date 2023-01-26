import * as userService from "../services/userServices.js"

export function registerUser(req,res,next) {
    userService
    .registerUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function addUser(req, res, next) {
    console.log("yei ho",req.body)
    userService.saveUser(req.body)
    .then ((data) => res.status(200).json(data))
    .catch((err) => {
    // res.status(400).json({err});
    console.log("rhis is err",err)
    next(err)}); 
}

/**
 * Controller to get details of all Users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getAllUsers(req, res, next) {
    console.log("pc",req.query);
    userService
      .getAllUsers()
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

  export function getUserDetails(req, res, next) {
    const user = req.params.id;
    userService
      .getUserDetails(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

export function updateUser (req,res,next) {
    console.log("req",req.params.userIdentifier,req.body)
    userService.updateUserById(req.params.userIdentifier,req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

export function deleteUser (req,res,next) {
    console.log("req",req.params.userIdentifier)
    userService.deleteUserById(req.params.userIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

/**
 * Controller for User login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
    console.log("usr",req.body);
    userService
      .login(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }





