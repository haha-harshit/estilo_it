// require mongoose
const mongoose = require("mongoose");

// user-schema
const userSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
    },
    l_name: {
        type: String,
        maxlength: 32,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    userInfo: {
        type: String,
        trim: true,
    },

    // TODO : come back here
    encry_password: {
        type: String,
        required: true,
    },

    salt: String,

    // defining roles/privileges
    role: {
        type: Number,
        default: 0,
    },

    // user purchases
    purchases: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("User", userSchema);
