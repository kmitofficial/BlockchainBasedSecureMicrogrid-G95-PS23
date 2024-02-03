const mongoose = require("mongoose");
const {Plan} = require("../models/createPlanSchema");

const addPlan = async (req, res) => {
  try {
    // console.log(req.body)
    const plan = await Plan.create(req.body);
    plan.save()
    res.send(plan);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};


const getPlan = async (req, res) => {
  try {
    const plan = await Plan.findOne(req.body);
    res.send(plan);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

const getAllPlans = async (req, res) => {
  try {
    console.log("something")
    const plan = await Plan.find(req.body);
    res.json(plan);
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
 
// const removeTransaction = async (req, res) => {
//   try { 
//     const Transaction = await TransactionBills.deleteOne(req.body);
//     res.json({success:true});
//   } catch (error) {
//     console.log(error);
//     res.status(500).send();
//   }
// };

// const removeAllTransaction = async (req, res) => {
//     try {
//       const cart = await TransactionBills.delete(req.body);
//       res.json({success:true});

//     } catch (error) {
//       console.log(error);
//       res.status(500).send();
//     }
//   };
  

module.exports = {addPlan,getPlan,getAllPlans}