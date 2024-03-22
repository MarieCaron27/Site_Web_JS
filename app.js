const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");

const dataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projet_web_jeux'
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

dataBase.connect((error) => 
{
    if(error) 
    {
        console.log(error);
    } 
    else 
    {
        console.log("You are connected to the database !");
    }
});

app.get("/", (req, res) => 
{
    res.render("index"); 
});

app.get("/signUp", (req, res) => 
{
    res.render("signUp_page"); 
});

app.get("/login", (req, res) => 
{
    res.render("login_page"); 
});

app.listen(8000, () => 
{
    console.log("Server started on port 8000");
});
