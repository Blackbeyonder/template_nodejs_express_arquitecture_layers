// src/application/services/user_service.js
//!Solo sirve para llamar al metodo que le corresponde en DOMAIN 
// src/application/services/UserService.js
const UserRepository = require('../repositories/userRepository');

async function getAllUsers() {
    try {
        return await UserRepository.getAllUsers();
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}


module.exports = {
    getAllUsers
};
