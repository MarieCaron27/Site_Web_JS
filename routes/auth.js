const express = require('express');
const registerController = require('../controllers/auth');
const router = express.Router();

router.post("/auth/register",registerController.register);

module.exports = router;