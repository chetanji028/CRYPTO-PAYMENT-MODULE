const hre = require("hardhat");

async function main() {
  const TokenLedger = await hre.ethers.getContractFactory("TokenLedger");
  const ledger = await TokenLedger.deploy(); // Deploy the contract
  console.log(`TokenLedger deployed to: ${ledger.target}`); // Use .target to get the contract address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});