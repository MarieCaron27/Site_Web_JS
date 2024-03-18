const express = require("express"); //Gets the package express
const app = express(); //Starts the server
const mysql = require("mysql");
const myPath = require("path"); //To import needed

const dataBase = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projet_web_jeux'
});

const publicDirectory = myPath.join(__dirname,'./public'); //Where our JS or CSS files are going to be

app.use(express.static(publicDirectory)); //Make sure that express uses the publicDirectory
app.set('view engine','hbs');

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

app.get("/", (req,res) =>
{
    //res.send("<h1>Home Page</h1>"); //Send a responde to the requeste received (req)
    res.render("index"); //Used to render a view and sends the rendered HTML string to the client
});

app.get("/login_page", (req,res) =>
{
    //res.send("<h1>Home Page</h1>"); //Send a responde to the requeste received (req)
    res.render("login_page"); //Used to render a view and sends the rendered HTML string to the client
});

app.listen(8000, () =>
{
    console.log("Server started on port 8000");
});

