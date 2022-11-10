const {ethers}= require("hardhat");

async function main() {
  const demoTest = await ethers.getContractFactory("Demo");
  const Messenger = await demoTest.deploy("deploy the contract in QuickNode");
  await Messenger.deployed();
  console.log("Address of the deployed contract : ", Messenger.address)
}

main()
    .then(()=>process.exit(0))
    .catch(error =>{
      console.error(error);
      process.exit(1);
    });
