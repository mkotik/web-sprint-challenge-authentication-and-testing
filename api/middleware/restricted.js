const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../auth/secrets");

const restrict = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  console.log(localStorage.getItem("token"));
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        next({ status: 401, message: "Token is Invalid" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    next({ status: 401, message: "token required" });
  }
};

module.exports = restrict;
