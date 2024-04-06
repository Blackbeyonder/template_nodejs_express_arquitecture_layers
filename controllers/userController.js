// src/infrastructure/adapters/controllers/userController.js

const express = require('express');
const router = express.Router();
const pool = require('../config/mysql');
const userService  = require('../services/user_services'); // Ruta al archivo del servicio de usuarios
// const UserRepository = require('../../repositories/user_repository'); // Ruta al archivo del servicio de usuarios 

// Endpoint para obtener todos los usuarios
async function getAllUsers(req, res, next) {
  try {
    console.log("[GET]",req.url); // Imprime la URL solicitada
    // console.log("Datos del usuario:", req.body); // Imprime los datos enviados por el usuario

    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
}

module.exports = {
  getAllUsers
};
