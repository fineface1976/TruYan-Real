 // ICO Configuration
const ICO_START_DATE = new Date('2024-08-01'); // SET YOUR DATE
const ICO_DAYS = 90;

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

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
}

// Wallet Connection
document.getElementById('connectBtn').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const walletDisplay = `${accounts[0].slice(0,6)}...${accounts[0].slice(-4)}`;
      document.getElementById('walletAddress').textContent = walletDisplay;
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('Install MetaMask!');
  }
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
