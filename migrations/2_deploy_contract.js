const Meme = artifacts.require("Meme");
const Meme2 = artifacts.require("Meme2");
const Meme3 = artifacts.require("Meme3");

module.exports = function(deployer) {
  deployer.deploy(Meme);
  deployer.deploy(Meme2);
  deployer.deploy(Meme3);
};
