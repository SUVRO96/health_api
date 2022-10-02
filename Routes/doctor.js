const express = require("express");

const router = express.Router();
const Doctor = require("../Models/Doctors");

// http://localhost:4000/doctors
router.get("/", async (req, res) => {
  try {
    const response = await Doctor.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

//localhost:4000/doctors/addoctor
http: router.post("/addoctor", async (req, res) => {
  try {
    const tempDoc = new Doctor({
      id: req.body.id,
      name: req.body.name,
      imageurl: req.body.imageurl,
      degrees: req.body.degrees,
      spec: req.body.spec,
      surgion: req.body.surgion,
      day: req.body.day,
      from: req.body.from,
      to: req.body.to,
    });
    const response = await tempDoc.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
