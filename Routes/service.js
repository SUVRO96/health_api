const express = require("express");
const router = express.Router();

const Service = require("../Models/Services");

router.post("/addservice", async (req, res) => {
  try {
    const tempServ = new Service({
      id: req.body.id,
      name: req.body.name,
      type: req.body.type,
      category: req.body.category,
      doctors: req.body.doctors,
      description: req.body.description,
      cost: req.body.cost,
    });
    const response = await tempServ.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Service.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/serach/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const response = await Service.find({ category: category });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/type/:type", async (req, res) => {
  try {
    const type = req.params.type;
    const response = await Service.find({ type: type });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
