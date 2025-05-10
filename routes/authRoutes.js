const express = require("express");
const authRoutes = express.Router();
const authController = require("../controllers/authController");

authRoutes.post("/tokens", authController.login);

module.exports = authRoutes;
