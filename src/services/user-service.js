const { JWT_key } = require('../config/server-config');
const UserRepository  = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {
    constructor() {
        this.userRepository = new UserRepository;
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something wrong in user service");
            throw error;
        }
    }

    async signIn(email, plainPassword){
        try {
             const user = await this.userRepository.getByEmail(email);
             const passwordMatch = this.checkPassword(plainPassword,user.password);
             
             if(!passwordMatch){
                console.log("password doesnt match");
                throw {error: "incorrect password"};
            }

             const newJwt = this.createToken({email: user.email, id: user.id})
             return newJwt;
             
        } catch (error) {
            console.log("somthing went wrong in sign in process");
            throw error;
        }
    }
/*
    async destroy(id) {
        try {
            await this.userRepository.destroy(id);
            return true;
        } catch (error) {
            console.log("something wrong in user service");
            throw error;
        }
    }
*/
     
    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_key, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("something went wrong in user service token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_key);
            return response;
        } catch (error) {
            console.log("something went wrong in user service token validation", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("something went wrong in user service password checking ");
            throw error;
        }
    }
    
    async isAuthenticated(token){
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw{error: 'invalid token'}
            }
            const user = this.userRepository.getById(response.id);
            if(!user){
                throw{error: 'no user with the corresponding token exists'}
            }
            return user.id;
        } catch (error) {
            console.log("something went wrong in user service in token auth");
            throw error;
        }
    }

}

module.exports = UserService;