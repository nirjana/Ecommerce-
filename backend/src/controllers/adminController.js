import * as adminService from "../services/adminServices.js"

export function addAdmin(req, res, next) {
    console.log("yei ho",req.body)
    adminService.saveAdmin(req.body)
    .then ((data) => res.status(200).json(data))
    .catch((err) => {
    // res.status(400).json({err});
    console.log("rhis is err",err)
    next(err)}); 
}

/**
 * Controller to get details of all admins.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getAllAdmins(req, res, next) {
    console.log("pc",req.query);
    adminService
      .getAllAdmins()
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

export function updateAdmin (req,res,next) {
    console.log("req",req.params.adminIdentifier,req.body)
    adminService.updateAdminById(req.params.adminIdentifier,req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

export function deleteAdmin (req,res,next) {
    console.log("req",req.params.adminIdentifier)
    adminService.deleteAdminById(req.params.adminIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

/**
 * Controller for admin login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
    console.log("usr",req.body);
    adminService
      .login(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

export function registerAdmin(req,res,next) {
    const{name,email,password} = req.body;
    console.log("register",req.body)
    adminService
    .saveAdmin(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

