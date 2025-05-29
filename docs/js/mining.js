 // Mining Counter
function updateMining() {
  document.getElementById('miningSpeed').textContent = '0.005 MZLx/ms';
  document.getElementById('minedToday').textContent = '12.5 MZLx';
  document.getElementById('minedTotal').textContent = '1,240 MZLx';
}

setInterval(updateMining, 100);
updateMining();
