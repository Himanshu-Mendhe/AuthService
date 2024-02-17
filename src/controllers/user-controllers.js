const UserService = require('../services/user-service');

const userService = new UserService();

const create= async(req,res) => {
    try {
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data:user,
            success:true,
            message:'created a user',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'unable to create a user'
        })
    }
}

const signIn= async(req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'signed in the user',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'unable to signIn a user'
        })
    }
}

const isAuthenticated= async(req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data:response,
            message:'user is authenticated and token is valid',
            success:true,
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'unable to signIn a user'
        })
    }
}

module.exports= {
    create,
    signIn,
    isAuthenticated
} 