 // Mining Counter Updates
function updateMining() {
  const elements = {
    miningSpeed: "0.005 MZLx/ms",
    minedToday: "12.5 MZLx",
    minedTotal: "1,240 MZLx"
  };

  Object.entries(elements).forEach(([id, value]) => {
    document.getElementById(id).textContent = value;
  });
}

// Update every second
setInterval(updateMining, 1000);
updateMining();
