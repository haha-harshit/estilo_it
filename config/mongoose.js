const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/estilo_development", {
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
