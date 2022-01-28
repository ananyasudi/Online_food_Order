const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "trial"

// routes
// var testAPIRouter = require("./routes/testAPI");
var RegisterRouter = require("./routes/Register");
var LoginRouter=require("./routes/Login");
var getUserRouter=require("./routes/getU");
var VendorRouter = require("./routes/vend_api");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
// app.use("/testAPI", testAPIRouter);
app.use("/register", RegisterRouter);
app.use("/login",LoginRouter);
app.use("/buyer",getUserRouter);
app.use("/vendor",VendorRouter);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
