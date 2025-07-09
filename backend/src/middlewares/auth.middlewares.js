const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized, Login first"
        });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.userInfo = decoded;
    next();
}
module.exports = authMiddleware;