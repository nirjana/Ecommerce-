import * as userService from "../services/userServices.js"

export function registerUser(req,res,next) {
    const{name,email,password,avatar} = req.body;
    userService
    .registerUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}



