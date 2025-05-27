 // ICO Configuration
const ICO_START_DATE = new Date('2025-05-01'); // SET YOUR DATE
const ICO_DAYS = 90;

// DOM Elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const externalWalletBtn = document.getElementById('externalWalletBtn');
const platformWalletBtn = document.getElementById('platformWalletBtn');
const walletAddress = document.getElementById('walletAddress');

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

// Wallet Connection
externalWalletBtn.addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const displayAddress = `${accounts[0].slice(0,6)}...${accounts[0].slice(-4)}`;
      walletAddress.innerHTML = `Connected: <strong>${displayAddress}</strong>`;
    } catch (error) {
      console.error('Connection failed:', error);
    }
  } else {
    alert('Please install MetaMask!');
  }
});

// Platform Wallet Simulation
platformWalletBtn.addEventListener('click', () => {
  const simulatedWallet = `0x${[...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
  walletAddress.innerHTML = `TruYan Wallet: <strong>${simulatedWallet.slice(0,6)}...${simulatedWallet.slice(-4)}</strong>`;
});

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
setInterval(updateCountdown, 60000);
