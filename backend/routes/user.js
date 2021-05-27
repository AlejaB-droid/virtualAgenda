const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/userRegistration", async(req, res) => {
    let user = await User.findOne({userName: req.body.userName})
    if(user) return res.status(400).send("The user already exists");

    let email = await User.findOne({email: req.body.email})
    if(email) return res.status(400).send("The user already exists");
    
    const hash = await bcrypt.hash(req.body.password, 10)

    user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        userName: req.body.userName,
        password: hash
    })

    const result = await user.save();

    if (result) {
        const jwt = user.generateJWT();
        res.status(200).send({jwt})
    } else {
        return res.status(400).send("Couldn't register user")
    }
});

module.exports = router;