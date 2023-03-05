"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var useRouter = require("./routes/routeUser/user");
require("dotenv").config();
var app = express();
var port = process.env.PORT || 4000;
//middleware
app.use(express.json());
app.use("/api", useRouter);
//route
app.get("/", function (req, res) {
    res.send("Hello World!");
});
mongoose
    .connect(process.env.MONGODBURL)
    .then(function () { return console.log("connect"); })["catch"](function (error) { return console.error(error); });
app.listen(port, function () {
    console.log("Example app listening on ports ".concat(port));
});
