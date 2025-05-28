
document.getElementById("connectWallet").addEventListener("click", async () => {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const shortAddress = `${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`;
    document.getElementById("walletAddress").textContent = shortAddress;
  } else {
    alert("Install MetaMask!");
  }
});
