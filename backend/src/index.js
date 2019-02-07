const express = require("express")
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://ahdrein:ahdrein123@ds123645.mlab.com:23645/goweek-ahdrein-backend",
{
    useNewUrlParser: true
})

app.get("/", (req, res) => {
    return res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})
