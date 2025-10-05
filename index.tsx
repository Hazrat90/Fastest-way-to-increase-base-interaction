import WalletConnectButton from "../components/WalletConnectButton";
import { interactWithContract } from "../utils/contracts";

export default function Home() {
  const handleInteract = async () => {
    const contracts = [
      {
        address: "0xYourVerifiedContract1",
        abi: [/* ABI JSON */],
      },
      {
        address: "0xYourVerifiedContract2",
        abi: [/* ABI JSON */],
      },
    ];

    for (const c of contracts) {
      await interactWithContract(c);
    }
  };

  return (
    <div>
      <h1>Verified Contracts Booster</h1>
      <WalletConnectButton />
      <button onClick={handleInteract}>Interact with Verified Contracts</button>
    </div>
  );
}

