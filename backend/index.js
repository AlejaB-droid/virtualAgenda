const express = require("express");
const mongoose = require("mongoose");

const User = require("./routes/user");
const Auth = require("./routes/auth");
const Reminder = require("./routes/reminder");

const app = express();

app.use(express.json());

app.use("/api/user", User);
app.use("/api/authentication/", Auth);
app.use("/api/reminder/", Reminder);

const port = process.env.PORT || 2064;

app.listen(port, () => console.log("Server executing on port: " + port));

mongoose.connect("mongodb://127.0.0.1:27017/virtualagendadb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log("Connected with MongoDB"))
.catch((error) => console.log("Error while connecting with MongoDB: ", error))