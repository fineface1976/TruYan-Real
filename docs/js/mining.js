 let miningInterval;
let sessionTimer;
let remainingTime = 24 * 60 * 60; // 24 hours in seconds
let totalMined = 0;

function startMining() {
  // Update status
  document.getElementById('miningStatus').textContent = 'MINE MAZOL: ON';
  
  // Start mining counter
  let sessionMined = 0;
  const miningRate = 0.005; // MZLx per millisecond
  
  miningInterval = setInterval(() => {
    sessionMined += miningRate;
    totalMined += miningRate;
    document.getElementById('miningSpeed').textContent = miningRate.toFixed(3) + ' MZLx/ms';
    document.getElementById('minedTotal').textContent = totalMined.toFixed(1) + ' MZLx';
  }, 100);
  
  // Start 24-hour timer
  sessionTimer = setInterval(() => {
    remainingTime--;
    
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    
    document.getElementById('miningTimer').textContent = 
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (remainingTime <= 0) {
      stopMining();
    }
  }, 1000);
}

function stopMining() {
  clearInterval(miningInterval);
  clearInterval(sessionTimer);
  document.getElementById('miningStatus').textContent = 'MINE MAZOL: OFF';
  remainingTime = 24 * 60 * 60; // Reset timer
  document.getElementById('miningTimer').textContent = '24:00:00';
}

// Toggle functionality
document.getElementById('miningToggle').addEventListener('click', () => {
  if (document.getElementById('miningStatus').textContent.includes('OFF')) {
    startMining();
  } else {
    stopMining();
  }
});
