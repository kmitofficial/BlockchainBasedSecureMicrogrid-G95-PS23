const listner = (Data, contractAddress) => {
  const ethers = require("ethers");
  // const contractABI = require("./build/contracts/Microgrid.json");
  const contractABI = require("../../blockChain/build/contracts/Microgrid.json");

  // const web3 = new ethers.providers.JsonRpcProvider(
  //     "http://127.0.0.1:7545"
  // );
  const provider = new ethers.providers.JsonRpcProvider({
    url: "http://127.0.0.1:8545",
    network: { chainId: 1337, name: "ganache" },
  });
  const contract = new ethers.Contract(
    contractAddress,
    contractABI.abi,
    provider
  );console.log("listner Started")
    
  try{contract
    .on("microGridAdded", (uniqueId) => {
      Data[Number(uniqueId)] = {
        battery: {},
        green_energy: {},
        grid: {},
        load: {},
      };
    })
    .on(
      "addBatteryData",
      (
        uniqueId,
        batteryId,
        minCapacity,
        maxCapacity,
        Charge,
        maxEfficiency,
        initSoc
      ) => {

        Data[Number(uniqueId)]["battery"][Number(batteryId)] = {
          charge: Number(Charge),
          maxCharge: Number(maxCapacity),
          efficiency: Number(maxEfficiency),
          charge_per_unit: 10,
        };
      }
    )

    .on("addLoadData", (microGridId, loadId, energyRequired) => {
      Data[Number(microGridId)]["load"][Number(loadId)] = {
        energyRequired: Number(energyRequired),
      };
    })
    .on(
      "addGreenEnergyData",
      (microGridId, greenEnergyId,charge, energyProduction) => {
        Data[Number(microGridId)]["green_energy"][Number(greenEnergyId)] = {
          charge: Number(charge),
          charge_per_unit: 10,
          max_Charge:Number(energyProduction)

        };
      }
    )
    .on("addGridData", (microGridId, gridId,charge, maxImport, maxExport) => {
      Data[Number(microGridId)]["grid"][Number(gridId)] = {
        maxImport: Number(maxImport),
        maxExport: Number(maxExport),
        charge:Number(charge)
      };
      
    });
}catch(err){
  console.log("err:",err)
}
}
module.exports = listner;

