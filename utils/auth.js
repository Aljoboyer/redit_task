const jwt = require("jsonwebtoken");

const SECRET = "te@mM@n@gement"; 

module.exports = (req) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    throw new Error("Unauthorized - No token provided");
  }

  try {
    const decoded = jwt.verify(token, SECRET); 
    return { user: decoded };
  } catch (err) {
    throw new Error("Unauthorized - Invalid token");
  }
};
