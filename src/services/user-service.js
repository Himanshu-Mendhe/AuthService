const UserRepository  = require('../repository/user-repository');

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

    async destroy(id) {
        try {
            await this.userRepository.destroy(id);
            return true;
        } catch (error) {
            console.log("something wrong in user service");
            throw error;
        }
    }
}

module.exports = UserService;