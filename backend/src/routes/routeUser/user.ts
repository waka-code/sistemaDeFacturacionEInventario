const express = require("express");
const userModels = require("./models/userModerls");
import { Request, Response } from "express";

const app = express.Router();

//create user
app.post(`/users`, (req: Request, res: Response) => {
  const createUser = userModels(req.body);
  createUser
    .save()
    .then((data: JSON) => res.json({ msg: "Create User" }))
    .catch((error: JSON) => res.json({ message: error }));
});

// get all users
app.get("/users", (req: Request, res: Response) => {
  userModels
    .find()
    .then((data: JSON) => res.json(data))
    .catch((error: JSON) => res.json({ message: error }));
});

// get a user
app.get("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  userModels
    .findById(id)
    .then((data: JSON) => res.json(data))
    .catch((error: JSON) => res.json({ message: error }));
});

// update a user
app.put("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { Name, User, Email, Pass } = req.body;

  userModels
    .updateOne({ _id: id }, { $set: { Name, User, Email, Pass } })
    .then((data: JSON) => res.json(data))
    .catch((error: JSON) => res.json({ message: error }));
});

// delete a user
app.delete("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  userModels
    .deleteOne({ _id: id })
    .then((data: JSON) => res.json(data))
    .catch((error: JSON) => res.json({ message: error }));
});

module.exports = app;
