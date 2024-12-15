// const JWT = require("jsonwebtoken");

// const secret = "SuperMan@123";

// async function createTokenForUser(user) {
//   const payload = {
//     _id: user._id,
//     email: user.email,
//     profileImageUrl: user.profileImageUrl,
//     role: user.role,
//   };
//   const token = JWT.sign(payload, secret);
//   return token;
// }

// async function validateToken(token) {
//   const payload = JWT.verify(token, secret);
//   return payload;
// }

// module.exports = {
//   createTokenForUser,
//   validateToken
// };

const JWT = require("jsonwebtoken");

const secret = "User";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
    fullName: user.fullName,
  };
  const options = { expiresIn: "1h" }; // Token expires in 1 hour
  const token = JWT.sign(payload, secret, options);
  return token;
}

function validateToken(token) {
  try {
    const payload = JWT.verify(token, secret);
    return payload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

module.exports = {
  createTokenForUser,
  validateToken,
};
