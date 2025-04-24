// module.exports = (req) => {
//   console.log("hitted ==>", req?.headers?.authorization)
//     const token = req.headers.authorization || '';
//     if (!req.headers.authorization) {
//       throw new Error('Unauthorized');
//     }
//   };
const jwt = require("jsonwebtoken");

const SECRET = "reditaaj"; // Replace with your actual secret

module.exports = (req) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "");

  console.log("Received token:", token);

  if (!token) {
    throw new Error("Unauthorized - No token provided");
  }

  try {
    const decoded = jwt.verify(token, SECRET); // ✅ Validate token
    return { user: decoded }; // 👈 You can access this in context
  } catch (err) {
    throw new Error("Unauthorized - Invalid token");
  }
};
