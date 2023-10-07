const hre = require("hardhat");

const winnersDiscordHandle: string = 'gabrieltemtsen'

async function main() {
  const contract = await hre.ethers.deployContract("SwissFiesta", [winnersDiscordHandle]);

  await contract.waitForDeployment();

  console.log(`SwissFiesta contract deployed to ${contract.target}`);
  // console.log("Sleeping.....");
  // // Wait for etherscan to notice that the contract has been deployed
  // await sleep(30000);

  // // Verify the contract after deploying
  // await hre.run("verify:verify", {
  //   address: contract.target,
  //   constructorArguments: [winnersDiscordHandle],
  // });
}
function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});