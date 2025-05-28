// Set ICO End Date (90 days from now)
const icoEndDate = new Date();
icoEndDate.setDate(icoEndDate.getDate() + 90);

function updateCountdown() {
  const now = new Date();
  const diff = icoEndDate - now;

  if (diff <= 0) {
    document.getElementById("timer").textContent = "ICO ENDED";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").textContent = 
    `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`;
}

// Update every minute
setInterval(updateCountdown, 60000);
updateCountdown(); // Initial call
