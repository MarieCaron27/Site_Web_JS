const express = require('express'); //Express is a fast and flexible web framework for Node.js that supports web and mobile applications, APIs, and performance
const router = express.Router();

router.get("/", (req,res) => 
{
    res.render("index");
});

router.get("/auth/register", (req,res) =>
{
    res.render("register");
});

router.get("/login", (req,res) =>
{
    res.render("login");
});

module.exports = router;