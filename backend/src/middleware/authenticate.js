import { expressjwt} from "express-jwt";
import * as dotenv from "dotenv";
dotenv.config({path : '../.env'});
// import * as dotenv from "dotenv"
// dotenv.config({path : '../../.env'});
console.log("authbhitra1",process.env.TOKEN_SECRET)
export default expressjwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256']
});
console.log("k",expressjwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256']
}))