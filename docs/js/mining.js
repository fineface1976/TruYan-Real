 class MiningSystem {
  constructor() {
    this.totalSeconds = 86400; // 24 hours
    this.isMining = false;
    this.interval = null;
    
    document.getElementById('miningToggle').addEventListener('click', () => {
      this.toggleMining();
    });
  }

  toggleMining() {
    if (this.isMining) {
      this.stopMining();
    } else {
      this.startMining();
    }
  }

  startMining() {
    this.isMining = true;
    const btn = document.getElementById('miningToggle');
    btn.classList.add('on');
    btn.classList.remove('off');
    document.getElementById('miningStatus').textContent = 'ON';
    
    this.interval = setInterval(() => {
      this.totalSeconds--;
      this.updateUI();
      
      if (this.totalSeconds <= 0) {
        this.stopMining();
        alert('Mining complete!');
      }
    }, 1000);
  }

  stopMining() {
    clearInterval(this.interval);
    this.isMining = false;
    const btn = document.getElementById('miningToggle');
    btn.classList.remove('on');
    btn.classList.add('off');
    document.getElementById('miningStatus').textContent = 'OFF';
  }

  updateUI() {
    const hours = Math.floor(this.totalSeconds / 3600);
    const mins = Math.floor((this.totalSeconds % 3600) / 60);
    const secs = this.totalSeconds % 60;
    
    document.getElementById('miningTime').textContent = 
      `${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
  }
}

new MiningSystem();
