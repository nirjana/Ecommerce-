export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log("uutmathiokeb",user);
    if (user && user.token) {
      return {'Content-Type': 'application/json',
      'Authorization': `Bearer ${ user.token}`};
    //   return { "x-auth-token": user.accessToken };
    } else {
      return {};
    }
  }