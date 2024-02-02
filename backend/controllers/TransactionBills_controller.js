const mongoose = require("mongoose");
const TransactionBills = require("../models/transactionBillsSchema");

const addTransaction = async (req, res) => {
  try {
    // console.log(req.body)
    const transaction = await TransactionBills.create(req.body);
    transaction.save()
    res.send(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};


const getTrasaction = async (req, res) => {
  try {
    const transaction = await TransactionBills.findOne(req.body);
    res.send(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

const getAllTrasaction = async (req, res) => {
  try {
    const transaction = await TransactionBills.find(req.body);
    res.json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

// const updateTransaction = async(req,res)=>{
//   try{

//     const transaction = await TransactionBills.updateOne()
    
//   }catch(err){

//   }
// }

const removeTransaction = async (req, res) => {
  try { 
    const Transaction = await TransactionBills.deleteOne(req.body);
    res.json({success:true});
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const removeAllTransaction = async (req, res) => {
    try {
      const cart = await TransactionBills.delete(req.body);
      res.json({success:true});

    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  };
  

module.exports = {addTransaction,getTrasaction,getAllTrasaction,removeAllTransaction,removeTransaction}
  
  