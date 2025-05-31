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

  loadSession() {
    const savedSession = localStorage.getItem('miningSession');
    if (savedSession) {
      const { endTime, mined } = JSON.parse(savedSession);
      this.endTime = new Date(endTime);
      this.totalMined = mined || 0;
      
      if (new Date() < this.endTime) {
        this.startMining(false);
      }
    }
  }

  setupButton() {
    const btn = document.getElementById('miningToggle');
    const status = document.getElementById('miningStatus');
    
    btn.addEventListener('click', () => {
      if (this.isMining) {
        this.stopMining();
      } else {
        this.startMining(true);
      }
    });
  }

  startMining(newSession) {
    if (newSession) {
      this.endTime = new Date(Date.now() + 86400000); // 24 hours
      this.totalMined = 0;
    }

    this.isMining = true;
    document.getElementById('miningToggle').classList.add('active');
    document.getElementById('miningStatus').textContent = 'ON';
    
    localStorage.setItem('miningSession', JSON.stringify({
      endTime: this.endTime,
      mined: this.totalMined
    }));

    this.miningInterval = setInterval(() => {
      this.totalMined += 0.005;
      this.updateUI();
      
      if (new Date() >= this.endTime) {
        this.stopMining();
      }
    }, 1000);
  }

  stopMining() {
    clearInterval(this.miningInterval);
    this.isMining = false;
    document.getElementById('miningToggle').classList.remove('active');
    document.getElementById('miningStatus').textContent = 'OFF';
  }

  updateUI() {
    // Update timer
    const now = new Date();
    const diff = this.endTime - now;
    
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    document.getElementById('miningTimer').textContent = 
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update totals
    document.getElementById('minedTotal').textContent = this.totalMined.toFixed(3) + ' MZLx';
  }
}

new MiningSystem();
