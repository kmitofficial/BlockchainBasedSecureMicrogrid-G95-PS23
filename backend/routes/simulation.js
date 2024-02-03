const express = require("express");
const router = express.Router();
const contractAddress = "0x653B99612366ff7C7ae1A48D46B63c79FA02284d";
const listener = require("./listener");
const TransactionBills = require("../models/transactionBillsSchema");
const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Types;
// Data = {"0":{"battery":{"0":{"charge":200,"maxCharge":200,"efficiency":10,"charge_per_unit":10}},"green_energy":{},"grid":{"0":{"maxImport":100,"maxExport":500,"charge":500}},"load":{}}}
Data = {

}

listener(Data, contractAddress);

UserWaiting = {
  // "659a8befd320daeabd92488b": {
  //   microGridId: 0,
  //   energyRequired: 200,
  //   energySatisfied: 0,
  //   fromBattery: 0,
  //   fromGE: 0,
  //   fromGrid: 0,
  // },
};
userFullFilled = {};

async function Simulation() {
  let microGrid;
  for (var userReq of Object.keys(UserWaiting)) {
    if (
      UserWaiting[userReq].energyRequired ==
      UserWaiting[userReq].energySatisfied
    ) {
      userFullFilled[userReq] = UserWaiting[userReq];
      const temp = UserWaiting[userReq]
      const done = await TransactionBills.updateOne(
        { _id: mongoose.Types.ObjectId.createFromHexString(userReq)},
        { $set: { "energySatisfied": true, "fromBattery": temp.fromBattery ,"fromGE":temp.fromGE,"fromGrid":temp.fromGrid} }
      )
      delete UserWaiting[userReq];
    } else {
      let microGrid = UserWaiting[userReq].microGridId;
      energyLeft =
        UserWaiting[userReq].energyRequired -
        UserWaiting[userReq].energySatisfied;
      batteryEnergyLeft = energyTranferFromBattery(
        energyLeft,
        microGrid,
        userReq
      );
      // console.log(UserWaiting[userReq.username],userReq.username,userReq)
      UserWaiting[userReq]["fromBattery"] += energyLeft - batteryEnergyLeft;
      GEenergyLeft = energyTranferFromGreenEnergy(
        batteryEnergyLeft,
        microGrid,
        userReq
      );
      UserWaiting[userReq]["fromGE"] += batteryEnergyLeft - GEenergyLeft;
      gridEnergyLeft = energyTranferFromGrid(GEenergyLeft, microGrid, userReq);
      UserWaiting[userReq]["fromGrid"] += GEenergyLeft - gridEnergyLeft;
      // console.log(gridEnergyLeft);
      UserWaiting[userReq]["energySatisfied"] += energyLeft - gridEnergyLeft;
      // UserWaiting[userReq]["energyRequired"] = gridEnergyLeft;
    }
  }
}
async function yourFunction() {
  // console.log(Data[0]["grid"])
  // console.log(Data[0]["green_energy"]["0"])
  if (Object.keys(Data).length !== 0) {
    Simulation();
  }
  for (let key in Data) {
    // Access each key in the object
    chargeBattery(key);
    chargeGreenEnergy(key);
    chargeGrid(key);
  }
  setTimeout(yourFunction, 2000);
}

yourFunction();

// console.log(UserWaiting);

function energyTranferFromBattery(chargeNeeded, microGrid, toUserName) {
  let batterys = Data[microGrid]["battery"];

  for (var key of Object.keys(batterys)) {
    let enegyProvidable =
      (batterys[key].maxCharge * batterys[key].efficiency) / 100;
    if (batterys[key].charge < enegyProvidable) {
      break;
    }
    if (enegyProvidable > chargeNeeded) {
      Data[microGrid]["battery"][key].charge -= chargeNeeded;
      chargeNeeded -= chargeNeeded;
    } else {
      Data[microGrid]["battery"][key].charge -= enegyProvidable;
      chargeNeeded -= enegyProvidable;
    }
  }
  return chargeNeeded;
}
function energyTranferFromGreenEnergy(chargeNeeded, microGrid, toUserName) {
  let green_energy = Data[microGrid]["green_energy"];

  for (var key of Object.keys(green_energy)) {
    let enegyProvidable = green_energy[key].charge;

    if (enegyProvidable > chargeNeeded) {
      Data[microGrid]["green_energy"][key].charge -= chargeNeeded;
      chargeNeeded -= chargeNeeded;
    } else {
      Data[microGrid]["green_energy"][key].charge -= enegyProvidable;
      chargeNeeded -= enegyProvidable;
    }
  }
  return chargeNeeded;
}
function energyTranferFromGrid(chargeNeeded, microGrid, toUserName) {
  let grid = Data[microGrid]["grid"];

  for (var key of Object.keys(grid)) {
    let enegyProvidable = grid[key].charge;
    if (enegyProvidable > chargeNeeded) {
      Data[microGrid]["grid"][key].charge -= chargeNeeded;
      chargeNeeded -= chargeNeeded;
    } else {
      Data[microGrid]["grid"][key].charge -= enegyProvidable;
      chargeNeeded -= enegyProvidable;
    }
  }
  return chargeNeeded;
}

function chargeBattery(microGrid) {
  let batterys = Data[microGrid]["battery"];
  for (var key of Object.keys(batterys)) {
    charge_produced = batterys[key].maxCharge / 20;
    if (batterys[key].maxCharge > batterys[key].charge + charge_produced) {
      Data[microGrid]["battery"][key].charge += charge_produced;
    } else {
      Data[microGrid]["battery"][key].charge = batterys[key].maxCharge;
    }
  }
}

function chargeGreenEnergy(microGrid) {
  let green_energy = Data[microGrid]["green_energy"];
  for (var key of Object.keys(green_energy)) {
    charge_produced = green_energy[key].max_Charge / 10;
    if (green_energy[key].max_Charge > green_energy[key].charge + charge_produced) {
      Data[microGrid]["green_energy"][key].charge += charge_produced;
    } else {
      Data[microGrid]["green_energy"][key].charge =
        green_energy[key].max_Charge;
    }
  }
}

function chargeGrid(microGrid) {
  let grid = Data[microGrid]["grid"];
  for (var key of Object.keys(grid)) {
    // console.log()
    charge_produced = grid[key].maxImport / 10;
    if (grid[key].maxExport > grid[key].charge + charge_produced) {
      Data[microGrid]["grid"][key].charge += charge_produced;
    } else {
      Data[microGrid]["grid"][key].charge = grid[key].maxExport;
    }
  }
}
// router.post("/energyTranferFromBattery", (req, res) => {
//   let chargeNeeded = req.body.chargeNeeded;
//   let batterys = Data["battery"];

//   for (var key of Object.keys(batterys)) {
//     let enegyPrwovidable =
//       (batterys[key].charge * batterys[key].efficiency) / 10;

//     if (enegyProvidable > chargeNeeded) {
//       Data["battery"][key].charge -= chargeNeeded;
//       chargeNeeded -= chargeNeeded;
//     } else {
//       Data["battery"][key].charge -= enegyProvidable;
//       chargeNeeded -= enegyProvidable;
//     }
//   }
//   return chargeNeeded;
// });

// router.post("/energyTranferFromGreenEnergy", (req, res) => {
//   let chargeNeeded = req.body.chargeNeeded;
//   let green_energy = Data["green_energy"];

//   for (var key of Object.keys(green_energy)) {
//     let enegyProvidable = green_energy[key].charge_produced;

//     if (enegyProvidable > chargeNeeded) {
//       Data["green_energy"][key].charge_produced -= chargeNeeded;
//       chargeNeeded -= chargeNeeded;
//     } else {
//       Data["green_energy"][key].charge_produced -= enegyProvidable;
//       chargeNeeded -= enegyProvidable;
//     }
//   }
//   return chargeNeeded;
// });

// router.post("/energyTranferFromGrid", (req, res) => {
//   let chargeNeeded = req.body.chargeNeeded;
//   let grid = Data["grid"];

//   for (var key of Object.keys(grid)) {
//     let enegyProvidable = grid[key].max_export;

//     if (enegyProvidable > chargeNeeded) {
//       Data["grid"][key].max_export -= chargeNeeded;
//       chargeNeeded -= chargeNeeded;
//     } else {
//       Data["grid"][key].max_export -= enegyProvidable;
//       chargeNeeded -= enegyProvidable;
//     }
//   }
//   return chargeNeeded;
// });

// router.get("/chargeBattery", (req, res) => {
//   let charge_produced = req.body.charge_produced;
//   let batterys = Data[microGrid]["battery"];
//   for (var key of Object.keys(batterys)) {
//     if (batterys.max_Charge > batterys.charge + charge_produced) {
//       Data[microGrid]["batterys"][key].charge += charge_produced;
//     } else {
//       Data[microGrid]["batterys"][key].charge = batterys.max_Charge;
//     }
//   }
// });
// router.get("/chargeGreenEnergy", (req, res) => {
//   let green_energy = Data[microGrid]["green_energy"];
//   for (var key of Object.keys(green_energy)) {
//     if (green_energy.max_Charge > green_energy.charge + charge_produced) {
//       Data[microGrid]["green_energy"][key].charge += charge_produced;
//     } else {
//       Data[microGrid]["green_energy"][key].charge = green_energy.max_Charge;
//     }
//   }
// });
// router.get("/chargeGrid", (req, res) => {
//   let green_energy = Data[microGrid]["grid"];
//   for (var key of Object.keys(green_energy)) {
//     if (green_energy.max_Charge > green_energy.charge + charge_produced) {
//       Data[microGrid]["grid"][key].charge += charge_produced;
//     } else {
//       Data[microGrid]["grid"][key].charge = grid.max_Charge;
//     }
//   }
// });



// {
//   "userName":"sam walton",
//   "energyRequired":2000,
//   "microGridId":0
// }

router.post("/requireUser", (req, res) => {
  let data = req.body;//userName,energyRequired,microGridId
  let userBool = false;
  for (var key in Object.keys(UserWaiting)) {
    if (key === data.userName) {
      UserWaiting[data.userName].energyRequired += data.energyRequired;
      userBool = true;
      break;
    }
  }
  if (userBool == false) {
    requestData = {
      microGridId: data.microGridId,
      energyRequired: data.energyRequired,
      energySatisfied: 0,
      fromBattery: 0,
      fromGE: 0,
      fromGrid: 0,
    };
    UserWaiting[data.userName] = requestData;
  }
  res.json(UserWaiting[""]);
});
router.get("/getUserWaiting", (req, res) => {
  res.json(UserWaiting);
});

router.get("/MicrogridData", (req, res) => {
  res.json(Data);
});
module.exports = router;
