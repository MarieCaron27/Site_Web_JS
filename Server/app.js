const express = require("express"); //Gets the package express
const app = express(); //Starts the server

app.get("/", (res,req) =>
{
    res.send("<h1>Home Page</h1>"); //Send a responde to the requeste received (req)
});

app.listen(5000, () =>
{
    console.log("Server started on port 5000");
});

