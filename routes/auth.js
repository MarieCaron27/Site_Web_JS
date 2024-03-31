const express = require('express');
const registerController = require('../controllers/register_form');
const router = express.Router();

router.post("/register",(res,req) => registerController.register);

module.exports = router;