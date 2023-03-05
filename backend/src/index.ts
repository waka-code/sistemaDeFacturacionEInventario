const express = require("express");
const mongoose = require("mongoose");
const useRouter = require("./routes/routeUser/user");
require("dotenv").config();
import { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use("/api", useRouter);

//route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => console.log("connect"))
  .catch((error: any) => console.error(error));

app.listen(port, () => {
  console.log(`Example app listening on ports ${port}`);
});
