const Microgrid = artifacts.require("Microgrid");

module.exports = function (deployer) {
  deployer.deploy(Microgrid);
};
