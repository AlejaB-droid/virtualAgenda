const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
    userId: String,
    activity: String,
    description: String,
    beginningDate: { type: Date,default: Date.now}
});

const Reminder = mongoose.model("reminder", reminderSchema);

module.exports = Reminder;