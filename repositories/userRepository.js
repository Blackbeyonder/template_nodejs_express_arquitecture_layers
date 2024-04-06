// repositories/userRepository.js

const poolPromise = require('../config/mysql');
const User = require('../models/userModel');

async function getAllUsers() {
    try {
        const pool = await poolPromise;
        const sql = 'SELECT * FROM users';
        const [rows] = await pool.query(sql);
        const users = rows.map(row => new User(row.id, row.name, row.lastname));
        
        return users;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllUsers
};
