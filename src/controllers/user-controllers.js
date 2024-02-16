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

module.exports= {
    create
} 