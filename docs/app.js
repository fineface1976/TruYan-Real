 // ICO Countdown Configuration
const ICO_START_DATE = new Date('2024-08-01'); // SET YOUR START DATE
const ICO_DAYS = 90;

// Initialize Web3
if (typeof window.ethereum !== 'undefined') {
  window.web3 = new Web3(window.ethereum);
} else {
  alert('Please install MetaMask to continue!');
}

// Countdown Timer Logic
function updateCountdown() {
  const now = new Date().getTime();
  const startTime = ICO_START_DATE.getTime();
  const endTime = startTime + (ICO_DAYS * 24 * 60 * 60 * 1000);
  
  if (now > endTime) {
    document.getElementById('countdownTimer').style.display = 'none';
    document.querySelector('.countdown-title').textContent = 'ICO LAUNCHED!';
    return;
  }

  const timeLeft = endTime - now;
  
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Wallet Connection
document.getElementById('connectWallet').addEventListener('click', async () => {
  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const wallet = accounts[0];
    document.getElementById('walletAddress').textContent = 
      `${wallet.slice(0, 6)}...${wallet.slice(-4)}`;
  } catch (error) {
    console.error('Wallet connection failed:', error);
  }
});

// Exchange Handler
function handleExchange() {
  const amount = document.getElementById('exchangeAmount').value;
  const currency = document.getElementById('currencySelect').value;
  
  if (amount > 0) {
    alert(`Processing ${amount} ${currency} exchange...`);
    // Add actual exchange logic here
  }
}

// Initialize Countdown
setInterval(updateCountdown, 1000);
updateCountdown();
