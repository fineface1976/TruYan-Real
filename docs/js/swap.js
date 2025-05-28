const MZLx_ADDRESS = "0x49F4a728BD98480E92dBfc6a82d595DA9d1F7b83";
const USDT_ADDRESS = "0x55d398326f99059ff775485246999027b3197955"; // BSC USDT

async function initSwap() {
  if (!window.ethereum) throw new Error("No wallet detected");
  
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  return { web3, account: accounts[0] };
}

document.getElementById("swapBtn").addEventListener("click", async () => {
  try {
    const { web3, account } = await initSwap();
    const amount = document.getElementById("swapAmount").value;
    const currency = document.getElementById("currencySelect").value;

    if (currency === "USDT") {
      // Swap USDT to MZLx (simplified)
      const usdtContract = new web3.eth.Contract(ERC20_ABI, USDT_ADDRESS);
      await usdtContract.methods.transfer(MZLx_ADDRESS, amount).send({ from: account });
      alert("Swap completed!");
    } else {
      // Swap BNB to MZLx
      await web3.eth.sendTransaction({
        from: account,
        to: MZLx_ADDRESS,
        value: web3.utils.toWei(amount, 'ether')
      });
    }
  } catch (error) {
    console.error("Swap failed:", error);
    alert("Swap failed. See console for details.");
  }
});
