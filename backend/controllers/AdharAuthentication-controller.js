const mongoose = require("mongoose");
const AdharAuthentic = require("../models/adhar_Authentication");
const { PythonShell } =  require("python-shell");

const addFace = async (req, res) => {
  try {
    const cart = await AdharAuthentic.create(req.body);
    await cart.save();
    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const removeFace = async (req, res) => {
  try {
    await adharAuthentic.deleteOne(req.body);
    res.send();
  } catch (error) {
    console.log(error);
    res.status(204).send();
  }
};

const removeAllFaces = async (req, res) => {
  try {
    await AdharAuthentic.deleteMany(req.body);
    res.send();
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "CLEAR_CART" });
  }
};
const getFace = async (req, res) => {
  try {
    const face = await AdharAuthentic.find({});
    res.send(face);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "CLEAR_CART" });
  }
};


const compareFace = async (req, res) => {
  try {
    console.log(req.body.aadharnumber);
    const originalFace = await AdharAuthentic.findOne({aadharnumber:req.body.aadharnumber});

    let temp = req.body.imagedata;
    // var originalData;
    compare(originalFace.image, temp);
    console.log(originalFace)

    async function compare(originalData, temp) {
      let pyshell = await new PythonShell("face.py", { mode: "text" });
      // sends a message to the Python script via stdin
      // console.log(originalData)
      pyshell.send(temp);
      pyshell.send(originalData);

      pyshell.on("message", function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(typeof message);
        temp1 = message;
        res.send(message);
      });

      // end the input stream and allow the process to exit
      pyshell.end(function (err, code, signal) {
        if (err) throw err;
        console.log("The exit code was: " + code);
        console.log("The exit signal was: " + signal);
        console.log("finished");
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "CLEAR_CART" });
  }
};

module.exports = { addFace, removeFace, removeAllFaces, getFace ,compareFace};