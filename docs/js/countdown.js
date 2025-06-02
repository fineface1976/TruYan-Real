// Private Sale Countdown (120 days)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 120);

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('countdown').textContent = 
    `${days}d ${hours.toString().padStart(2,'0')}h ${mins.toString().padStart(2,'0')}m`;
}

setInterval(updateCountdown, 60000);
updateCountdown();
