// import express
const express = require("express");

// use express
const app = express();

// defining port
const port = 8000;

// database connectivity
const db = require("./config/mongoose");

// main page
app.get("/", (req, res) => {
    return res.send("Home page");
});

// login
app.get("/login", (req, res) => {
    return res.send("This is Login Page!");
});

app.listen(port, () => {
    console.log("Server is up and running");
});
