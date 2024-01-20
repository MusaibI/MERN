import jwt from 'jsonwebtoken'

const jwtAuth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        res.send("Unauthorized")
    }
    try {
        const decoded = jwt.verify(token, "SECRETTOKEN");
        console.log(decoded)
        req.userId = decoded.email._id
        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send("Unauthorized")
    }
}

export default jwtAuth;