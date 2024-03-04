
const ethers = require("ethers");
const data = require("./walletwhitelist.json");
const abi = data.abi;
const bytecode = data.bytecode;
require('dotenv').config();
async function main() {
  const provider = ethers.getDefaultProvider("sepolia", {
    etherscan: process.env.API_KEY,
    exclusive: ["etherscan" ]
  });
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const factory = new ethers.ContractFactory(abi,bytecode,signer);
  const walletwaitlist = await factory.deploy();
  await walletwaitlist.waitForDeployment();
  console.log(
    `deployed to ${walletwaitlist.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
