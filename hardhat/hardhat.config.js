require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;

module.exports = {
  solidity: {version:"0.8.17"},
  networks:{
    goerli:{
      url: endpoint,
      accounts:[`0x${privateKey}`]
    }
  }
};
