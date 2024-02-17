const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "somrthing went wrong",
            err: 'email and password are mandatory in the request'
        })
    }
    next();
}

module.exports = {
    validateUserAuth
}