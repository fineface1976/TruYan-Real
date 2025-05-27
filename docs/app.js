 // ICO Configuration
const ICO_START_DATE = new Date('2024-08-01'); // SET YOUR DATE HERE
const ICO_DURATION_DAYS = 90;

// DOM Elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const connectBtn = document.getElementById('connectBtn');

// Initialize Countdown Immediately
function updateCountdown() {
  const now = new Date();
  const endDate = new Date(ICO_START_DATE);
  endDate.setDate(endDate.getDate() + ICO_DURATION_DAYS);
  
  // If ICO ended
  if (now >= endDate) {
    document.querySelector('.countdown-title').textContent = 'ICO HAS LAUNCHED!';
    document.getElementById('countdown').style.display = 'none';
    return;
  }
  
  const diff = endDate - now;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
}

// Wallet Connection
connectBtn.addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      alert(`Connected: ${accounts[0].slice(0,6)}...${accounts[0].slice(-4)}`);
    } catch (error) {
      alert('Connection failed: ' + error.message);
    }
  } else {
    alert('MetaMask not detected!');
  }
});

// Initialize
updateCountdown();
setInterval(updateCountdown, 60000); // Update every minute
