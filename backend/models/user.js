const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    phone: String,
    userName: String,
    password: String
});

userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        lastName: this.lastName,
        iat: moment().unix()
    },
    "jarvis"
    );
};

const User = mongoose.model("user", userSchema);

module.exports = User;