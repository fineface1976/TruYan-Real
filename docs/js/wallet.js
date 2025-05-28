 // MetaMask Connection
document.getElementById("connectMetaMask").addEventListener("click", async () => {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const shortAddress = `${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`;
    document.getElementById("walletAddress").textContent = shortAddress;
  } else {
    alert("Please install MetaMask!");
  }
});

// TruYan Wallet Connection (Mock)
document.getElementById("connectTruYan").addEventListener("click", () => {
  document.getElementById("walletAddress").textContent = "TruYan Wallet Connected";
});
