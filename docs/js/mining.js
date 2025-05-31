 class MiningSystem {
  constructor() {
    this.miningInterval = null;
    this.endTime = null;
    this.totalMined = 0;
    this.isMining = false;
    
    this.init();
  }

  init() {
    this.loadSession();
    this.setupButton();
  }

  setupButton() {
    const btn = document.getElementById('miningToggle');
    btn.addEventListener('click', () => {
      if (this.isMining) {
        this.stopMining();
      } else {
        this.startMining();
      }
    });
  }

  startMining() {
    this.isMining = true;
    this.endTime = Date.now() + 86400000; // 24 hours
    
    const btn = document.getElementById('miningToggle');
    btn.classList.add('on');
    btn.classList.remove('off');
    document.getElementById('miningStatus').textContent = 'ON';
    
    this.miningInterval = setInterval(() => {
      this.totalMined += 0.005;
      this.updateUI();
      
      if (Date.now() >= this.endTime) {
        this.stopMining();
      }
    }, 1000);
  }

  stopMining() {
    clearInterval(this.miningInterval);
    this.isMining = false;
    
    const btn = document.getElementById('miningToggle');
    btn.classList.remove('on');
    btn.classList.add('off');
    document.getElementById('miningStatus').textContent = 'OFF';
  }

  updateUI() {
    const remaining = Math.max(0, this.endTime - Date.now());
    const hours = Math.floor(remaining / 3600000);
    const mins = Math.floor((remaining % 3600000) / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    
    document.querySelector('.stat-item:nth-child(2) span:last-child').textContent = 
      `${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    
    document.querySelector('.stat-item:nth-child(3) span:last-child').textContent = 
      this.totalMined.toFixed(3) + ' MZLx';
  }

  loadSession() {
    const saved = localStorage.getItem('miningSession');
    if (saved) {
      const { endTime, mined } = JSON.parse(saved);
      if (Date.now() < endTime) {
        this.endTime = endTime;
        this.totalMined = mined;
        this.startMining();
      }
    }
  }
}

new MiningSystem();
