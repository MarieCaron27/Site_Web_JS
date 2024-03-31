const express = require('express'); //Express is a fast and flexible web framework for Node.js that supports web and mobile applications, APIs, and performance
const authControllers = require('../Controllers/signUp_form');
const router = express.Router();

router.post("/signUp", authControllers.register);

module.exports = router;