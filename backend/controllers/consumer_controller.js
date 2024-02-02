const mongoose = require("mongoose");
const Consumer = require("../models/consumerSchema");
const jwt = require("jsonwebtoken");
const jwtSecret = "i am the devil"
const addConsumer = async (req, res) => {
  try {
    const consumer = await Consumer.create(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const getConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.findOne(req.body);
    res.json(consumer);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const getAllConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.find(req.body);

    res.json(consumer);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const removeMultipleConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.delete(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const removeConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
const loginConsumer = async (req, res) => {
  try {
    const consumer =  await Consumer.findOne(req.body);
    console.log("ifugwqi")
    console.log("login",consumer)
    if (consumer) {
      const authToken = jwt.sign(req.body.microid, jwtSecret);
      return res.json({ success: true, consumerAuthToken: authToken ,microGridId:consumer.microGridId});
    } else {
      res.json({ success: false })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const updateMicrogridId = async (req, res) => {
  try {
    const microid = req.body.microid
    const microGridId = req.body.microGridId

    const filter = { microid: microid };
    const update = {
      $set: {
        microGridId: microGridId
      }
    };

    const result = await Consumer.updateOne(filter, update);

    if (result) {
      console.log("Document updated successfully");
      return res.json( { success: true });
    } else {
      console.log(microid,"No document matched the filter or value already up to date");
      return { success: false };
    }
  } catch (error) {
    console.error(error);
    return res.json({ success: false, error: error.message });
  }
};

module.exports = {
  addConsumer,
  getConsumer,
  getAllConsumer,
  removeMultipleConsumer,
  removeConsumer,
  loginConsumer,
  updateMicrogridId
};
