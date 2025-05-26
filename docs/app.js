// Web3 Configuration
let currentPrice = 0.001;
let isMining = false;

// Initialize Web3
if (typeof window.ethereum !== 'undefined') {
  window.web3 = new Web3(window.ethereum);
} else {
  alert('Install MetaMask!');
}

// Wallet Connection
document.getElementById('connectWallet').onclick = async () => {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  document.getElementById('walletAddress').textContent = accounts[0];
};

// Price Update Logic
function updatePriceDisplay() {
  document.getElementById('currentPrice').textContent = currentPrice;
}

// Mining System
document.getElementById('startMining').onclick = () => {
  isMining = !isMining;
  document.getElementById('startMining').textContent = 
    isMining ? 'Stop Mining' : 'Start Mining';
};

// Admin Controls
function showAdmin() {
  if(document.getElementById('adminPass').value === 'admin123') {
    document.getElementById('adminControls').style.display = 'block';
  }
}

window.updatePrice = () => {
  currentPrice = parseFloat(document.getElementById('newPrice').value);
  updatePriceDisplay();
};

// Initialization
updatePriceDisplay();
