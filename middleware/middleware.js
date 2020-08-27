module.exports = {
    authenticate,
    validateRole
}

function authenticate() {
    const [authType, token] = req.headers.authorization.split(' ');

    console.log(re.headers);

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'invalid token' })
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'No token found' })
    }
}

function validateRole() {

}