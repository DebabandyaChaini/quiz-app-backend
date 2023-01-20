const mongoose = require("mongoose");

const newUser = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        password: String
    },
    { timestamps: true }
);

const User = mongoose.model("mySignUpCollections", newUser);

module.exports = User;