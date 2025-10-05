import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function WalletConnectButton() {
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <button onClick={() => disconnect()}>Disconnect Wallet</button>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </div>
  );
}
