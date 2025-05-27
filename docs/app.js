 // ICO Configuration
const ICO_START_DATE = new Date('2024-08-01'); // SET YOUR DATE
const ICO_DAYS = 90;

// DOM Elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const externalWalletBtn = document.getElementById('externalWalletBtn');
const platformWalletBtn = document.getElementById('platformWalletBtn');
const walletModal = document.getElementById('walletModal');
const fingerprintBtn = document.getElementById('fingerprintBtn');
const closeModal = document.getElementById('closeModal');

// Initialize Countdown
function updateCountdown() {
  const now = new Date();
  const endDate = new Date(ICO_START_DATE);
  endDate.setDate(endDate.getDate() + ICO_DAYS);
  
  if (now >= endDate) {
    document.querySelector('.countdown-section h3').textContent = 'ICO LAUNCHED!';
    document.getElementById('countdown').style.display = 'none';
    return;
  }

  const diff = endDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  daysEl.textContent = days;
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
}

// External Wallet Connection
externalWalletBtn.addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      displayWallet(accounts[0]);
    } catch (error) {
      console.error('Connection failed:', error);
    }
  } else {
    alert('Please install MetaMask or another Web3 wallet!');
  }
});

// Platform Wallet Authentication
platformWalletBtn.addEventListener('click', () => {
  walletModal.style.display = 'flex';
});

fingerprintBtn.addEventListener('click', () => {
  // In a real app, this would trigger device biometrics API
  setTimeout(() => {
    const platformWallet = generatePlatformWallet();
    displayWallet(platformWallet);
    walletModal.style.display = 'none';
  }, 1000);
});

closeModal.addEventListener('click', () => {
  walletModal.style.display = 'none';
});

// Helper Functions
function displayWallet(address) {
  const displayAddress = `${address.slice(0,6)}...${address.slice(-4)}`;
  document.getElementById('walletAddress').innerHTML = `
    Connected: <strong>${displayAddress}</strong>
    <small>${address}</small>
  `;
}

function generatePlatformWallet() {
  // In production, this would use Web3.js to generate a non-custodial wallet
  const randomHex = [...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  return `0x${randomHex}`;
}

// Exchange Simulation
document.querySelector('.exchange-btn').addEventListener('click', () => {
  const amount = document.querySelector('.exchange-input').value;
  const currency = document.querySelector('.exchange-select').value;
  if (amount > 0) {
    alert(`Processing exchange: ${amount} ${currency} → MZLx`);
  }
});

// Initialize
updateCountdown();
setInterval(updateCountdown, 60000); // Update every minute
