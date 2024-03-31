const mysql = require("mysql");

const dataBase = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projet_web_jeux'
});

exports.register = (req,res) =>
{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const mailAddress = req.body.mailAddress;
    const userPassword = req.body.userPassword;
    const passwordConfirmed = req.body.passwordConfirmed;

}