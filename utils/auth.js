const jwt = require("jsonwebtoken");

const SECRET = "te@mM@n@gement"; // Replace with your actual secret

module.exports = (req) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "");

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
