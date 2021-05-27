const express = require("express");
const router = express.Router();

const Reminder= require("../models/reminder");
const User = require("../models/user");
const Auth = require("../middleware/auth");

router.post("/newReminder", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if(!user) return res.status(401).send("User not authenticated");

    const reminder = new Reminder({
        userId: user._id,
        activity: req.body.activity,
        description: req.body.description,
        beginnigDate: req.body.beginningDate
    });

    const result = await reminder.save();
    return res.status(200).send({result});
});

module.exports = router;