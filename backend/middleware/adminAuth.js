// to protect our routes / only access to admin
import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ status: false, message: "Not Authorized. Login Again." });
    }

    const token = authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (
      decodedToken.id !==
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      return res
        .status(401)
        .json({ status: false, message: "Not Authorized. Login Again." });
    }

    next();
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

export default adminAuth;
