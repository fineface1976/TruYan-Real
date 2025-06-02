 // Wallet Connection
document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert(`Connected: ${accounts[0].slice(0,6)}...${accounts[0].slice(-4)}`);
    } catch (error) {
      alert('Connection rejected');
    }
  } else {
    alert('Install MetaMask!');
  }
});

// Other buttons
document.getElementById('swapBtn').addEventListener('click', () => alert('Swap interface loading'));
document.getElementById('saveBtn').addEventListener('click', () => alert('Savings dashboard loading'));
document.getElementById('p2pBtn').addEventListener('click', () => alert('P2P exchange loading'));
