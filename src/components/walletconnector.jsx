import Web3Modal from "web3modal";
import Web3 from "web3";

const connectWallet = async () => {
  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions: {}, // Add MAZOL Wallet config here
  });
  
  const instance = await web3Modal.connect();
  const web3 = new Web3(instance);
  const accounts = await web3.eth.getAccounts();
  
  return accounts[0];
};
