 // Initialize Web3
if (typeof window.ethereum !== 'undefined') {
  window.web3 = new Web3(window.ethereum);
} else {
  alert('Please install MetaMask!');
}

// Wallet Connection
document.getElementById('connectWallet').addEventListener('click', async () => {
  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const address = accounts[0];
    document.getElementById('walletAddress').textContent = 
      `${address.slice(0,6)}...${address.slice(-4)}`;
  } catch (error) {
    console.error('Wallet connection failed:', error);
  }
});

// Exchange Handler
function handleExchange() {
  const amount = document.getElementById('exchangeAmount').value;
  const currency = document.getElementById('currencySelect').value;
  
  if(amount > 0) {
    alert(`Processing ${amount} ${currency} exchange...`);
    // Add actual exchange logic here
  }
}

// Mining Control
let isMining = false;
document.getElementById('startMining').addEventListener('click', () => {
  isMining = !isMining;
  document.getElementById('startMining').textContent = 
    isMining ? 'Stop Mining' : 'Start Mining';
  // Add actual mining logic here
});
