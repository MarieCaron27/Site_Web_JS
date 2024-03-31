const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");

const dataBase = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projet_web_jeux'
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Parse URL encoded bodies (as sent by HTML forms) is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({
    extended: false
}));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

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

//Define routes :
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(8000, () => 
{
    console.log("Server started on port 8000");
});
