const express = require('express'); //Express is a fast and flexible web framework for Node.js that supports web and mobile applications, APIs, and performance
const router = express.Router();

router.get("/", (req, res) => 
{
    res.render("index"); 
});

router.get("/signUp", (req, res) => 
{
    res.render("signUp_page"); 
});

router.get("/login", (req, res) => 
{
    res.render("login_page"); 
});

module.exports = router;