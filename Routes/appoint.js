const express = require("express");
const router = express.Router();
const Appoint = require("../Models/Appoint");

// http://localhost:4000/appoints/addappoint
router.post("/addappoint", async (req, res) => {
  try {
    const tempApp = new Appoint({
      id: req.body.id,
      doctor: req.body.doctor,
      service: req.body.service,
      name: req.body.name,
      mobile: req.body.mobile,
      date: req.body.date,
      time: req.body.time,
    });
    const response = await tempApp.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

// http://localhost:4000/appoints/
router.get("/", async (req, res) => {
  try {
    const response = await Appoint.find();
  } catch (err) {
    res.status(400).json(err);
  }
});

// http://localhost:4000/appoints/search/:
router.get("/search/:mobile", async (req, res) => {
  try {
    const mobile = req.params.mobile;
    const response = await Appoint.find({ mobile: mobile });
    if (response.length > 0) {
      res.status(200).json(response);
    } else {
      res.status(401).json("not found");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
