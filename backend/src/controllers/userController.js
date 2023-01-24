import * as userService from "../services/userServices.js";

export function registerUser(req, res, next) {
  const { name, email, password, avatar } = req.body;
  userService
    .registerUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}


// export function loginUser(req, res, next) {
//   const { email, password} = req.body;
//   userService
//     .loginUser(req.body)
//     .then((data) => res.json(data))
//     .catch((err) => next(err));
// }


export function loginUser(req, res, next) {
  const { email, password } = req.body;

  userService
    .loginUser(req.body)
    .then(({ token, data, options, message }) => {
      if (!token) {
        return {
          message: "Token not found",
        };
      }
      res.status(200).cookie("token", token, options).json({ data, message });
    })
    .catch((err) => next(err));
}

export function loginWithCookie(req, res, next) {
  userService
    .loginWithCookie(req.user)
    .then((user) => res.status(200).json(user))
    .catch((err) => next(err));
}

export function logout(req, res, next) {
  userService
    .logout()
    .then((data) =>
      res.clearCookie("token", { expires: new Date() }).json(data)
    )
    .catch((err) => next(err));
}



