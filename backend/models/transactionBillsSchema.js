const mongoose = require("mongoose"); 

const transactionBillsSchema = mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  microid:{
    type: String,
    required: true,
  },
  units:{
    type: Number,
    required: true,
  },
  amount:{
    type:mongoose.Schema.Types.Mixed,
    required: true,
  },

  energySatisfied:{
    type:Boolean,
    default:false,
  },
  fromBattery:{
    type:Number,
    default:0,
  },
  fromGE:{
    type:Number,
    default:0,
  },
  fromGrid:{
    type:Number,
    default:0,
  },
  microGridId: {
    type:Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const TransactionBills = new mongoose.model("transactionBill", transactionBillsSchema);

module.exports = TransactionBills;