const mongoose = require("mongoose");
const {GstUser} = require("../models/gstUserSchema");

const addGst = async (req, res) => {
  try {
    // console.log(req.body)
    const plan = await GstUser.create(req.body);
    plan.save()
    res.send(plan);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};


const getGst = async (req, res) => {
  try {
    const plan = await GstUser.findOne(req.body);
    res.send(plan);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

const getAllGst = async (req, res) => {
  try {
    console.log("something")
    const plan = await GstUser.find(req.body);
    res.json(plan);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 
  

module.exports = {addGst,getGst,getAllGst}