import * as userService from "../services/userServices.js";

export function registerUser(req, res, next) {
  const { name, email, password, avatar } = req.body;
  userService
    .registerUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}


export function loginUser(req, res, next) {
  const { email, password} = req.body;
  userService
    .loginUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}