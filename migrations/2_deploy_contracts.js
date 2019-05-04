const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
 deployer.deploy(Voting, ['Obama', 'Donal Trump', 'Clinton'].map(name => web3.utils.asciiToHex(name)));
};