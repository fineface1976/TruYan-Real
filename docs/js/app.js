// Auto-hide ICO timer post-countdown
const icoEndDate = new Date();
icoEndDate.setDate(icoEndDate.getDate() + 90);

function checkICOStatus() {
  if (Date.now() > icoEndDate) {
    document.getElementById('icoTimer').classList.add('hidden');
    document.getElementById('investSection').classList.remove('hidden');
  }
}

// Update timer every minute
function updateTimer() {
  const diff = icoEndDate - Date.now();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById('timer').textContent = `${days}d ${hours}h ${mins}m`;
}

setInterval(() => {
  updateTimer();
  checkICOStatus();
}, 60000);

// Initialize
updateTimer();
checkICOStatus();
