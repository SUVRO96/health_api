require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const doctorRoute = require("./Routes/doctor");
const appointRoute = require("./Routes/appoint");
const serviceRoute = require("./Routes/service");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.status(200).json("app running...");
  } catch (err) {
    res.status(400).json(err);
  }
});

app.use("/doctors", doctorRoute);
app.use("/appoints", appointRoute);
app.use("/service", serviceRoute);

mongoose.connect(
  "mongodb+srv://Suvro96:Suvro_96@cluster0.uq4uv.mongodb.net/health?retryWrites=true&w=majority",
  () => {
    console.log("db connected");
  }
);

app.listen(4000);
