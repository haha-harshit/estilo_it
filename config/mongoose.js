require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind("Error in connecting to DB!"));

db.once("open", function () {
    console.log("Sucessfully connected to DB!");
});

module.exports = db;
