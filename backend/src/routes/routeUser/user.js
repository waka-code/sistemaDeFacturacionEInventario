"use strict";
exports.__esModule = true;
var express = require("express");
var userModels = require("./models/userModerls");
var app = express.Router();
//create user
app.post("/users", function (req, res) {
    var createUser = userModels(req.body);
    createUser
        .save()
        .then(function (data) { return res.json(data); })["catch"](function (error) { return res.json({ message: error }); });
});
// get all users
app.get("/users", function (req, res) {
    userModels
        .find()
        .then(function (data) { return res.json(data); })["catch"](function (error) { return res.json({ message: error }); });
});
// get a user
app.get("/users/:id", function (req, res) {
    var id = req.params.id;
    userModels
        .findById(id)
        .then(function (data) { return res.json(data); })["catch"](function (error) { return res.json({ message: error }); });
});
// update a user
app.put("/users/:id", function (req, res) {
    var id = req.params.id;
    var _a = req.body, Name = _a.Name, User = _a.User, Email = _a.Email, Pass = _a.Pass;
    userModels
        .updateOne({ _id: id }, { $set: { Name: Name, User: User, Email: Email, Pass: Pass } })
        .then(function (data) { return res.json(data); })["catch"](function (error) { return res.json({ message: error }); });
});
// delete a user
app["delete"]("/users/:id", function (req, res) {
    var id = req.params.id;
    userModels
        .deleteOne({ _id: id })
        .then(function (data) { return res.json(data); })["catch"](function (error) { return res.json({ message: error }); });
});
module.exports = app;
