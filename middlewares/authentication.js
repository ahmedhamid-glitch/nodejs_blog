// const { validateToken } = require("../services/authentication");

// function checkForAuthenticationCookie(cookieName) {
//   return (req, res, next) => {
//     const tokenCookieValue = req.cookies[cookieName];
//     if (!tokenCookieValue) {
//       // token is valid, proceed with the request
//       next();
//     }

//     try {
//       const userPayload = validateToken(tokenCookieValue);
//       req.user = userPayload;
//       console.log("userPayload", userPayload);
//     } catch (error) {
//       // token is invalid, return 401
//       // res.status(401).send("Invalid token");
//     }
//     next();
//   };
// }

// module.exports = {
//   checkForAuthenticationCookie,
// };

const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];

    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload; // Assign the decoded payload to req.user
    } catch (error) {
      req.user = null; // Set req.user to null if token validation fails
    }
    next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
