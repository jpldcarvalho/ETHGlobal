import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [137, 1337, 80001, 3092851097537429]
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

const walletlink = new WalletLinkConnector({
  url: "https://rpc-mumbai.maticvigil.com/",
  appName: "nftw"
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink
};
