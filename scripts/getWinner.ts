import { ethers } from "ethers";

// Import Hardhat and SwisstronikJS functions
const hre = require("hardhat");
const swissRPC = 'https://json-rpc.testnet.swisstronik.com/';
const mumbaiRPC = 'https://sly-spring-isle.matic-testnet.discover.quiknode.pro/306107e4bc13a52d3467a686206c9737618eb708/'
const getWinner = async (rpcURL: string, contractAddress: string, storageIndex: number) => {
    const provider: any = new ethers.getDefaultProvider(rpcURL)
  
    try {
      const storageValue = await provider.getStorage(contractAddress, storageIndex);
      // Remove '0x' from the start
      const winnerText = Buffer.from(storageValue.slice(2), 'hex').toString(); 
      console.log(`Anddd the Winner is:  0x${winnerText}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  async function main() {
    const deployedSwissContract = "0x09270CF87bC64022DC0d68423D01b3e509A222A1";
    const deployedMumbaiContract = "0x6421ad2b45bF585069a4Ea6d05a77eeEBc8D8bb7";
    const storageIndex = 0; 
    const rpcURL = hre.network.config.url;


    if (rpcURL == swissRPC) {
        await getWinner(rpcURL, deployedSwissContract, storageIndex);

    } 
    else if (rpcURL == mumbaiRPC) {
        await getWinner(rpcURL, deployedMumbaiContract, storageIndex);

    }
    else {
        return 'Unrecognised Network provided kindly check!! to confirm'
    }
  
   
  }
  
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});