const express = require("express");
const authRoutes = express.Router();
const authController = require("../controllers/authController");

authRoutes.post("/", authController.login);

module.exports = authRoutes;
