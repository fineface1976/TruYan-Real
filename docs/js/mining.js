// Real-time counter formatting
function updateMiningDisplay() {
  const elements = {
    miningSpeed: (0.005).toFixed(3),
    minedToday: (12.5).toFixed(1),
    minedTotal: (1240).toLocaleString()
  };

  Object.entries(elements).forEach(([id, value]) => {
    document.getElementById(id).textContent = `${value} MZLx`;
  });
}

setInterval(updateMiningDisplay, 100)
