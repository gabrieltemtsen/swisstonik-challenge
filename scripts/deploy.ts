const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("SwissFiesta", ["gabrieltemtsen"]);

  await contract.waitForDeployment();

  console.log(`SwissFiesta contract deployed to ${contract.target}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});