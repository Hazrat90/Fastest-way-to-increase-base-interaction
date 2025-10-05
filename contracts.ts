import { ethers } from "ethers";

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || "";
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

interface ContractData {
  address: string;
  abi: any[];
}

export async function interactWithContract(contractData: ContractData) {
  const contract = new ethers.Contract(contractData.address, contractData.abi, wallet);

  try {
    // Example interaction: calling a "mint" function if exists
    if (contract.mint) {
      const tx = await contract.mint();
      await tx.wait();
      console.log(`Interaction with ${contractData.address} successful!`);
    } else {
      console.log(`Contract at ${contractData.address} has no mint function.`);
    }
  } catch (err) {
    console.error(err);
  }
}
