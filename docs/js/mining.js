 class MiningSystem {
  constructor() {
    this.totalSeconds = 86400; // 24h in seconds
    this.isMining = false;
    this.interval = null;
    this.baseSpeed = 0.001;

    document.getElementById('miningToggle').addEventListener('click', () => {
      this.isMining ? this.stop() : this.start();
    });
  }

  start() {
    this.isMining = true;
    const btn = document.getElementById('miningToggle');
    btn.classList.add('on');
    btn.classList.remove('off');
    document.getElementById('miningStatus').textContent = 'ON';

    this.interval = setInterval(() => {
      this.totalSeconds--;
      this.updateUI();
      
      if (this.totalSeconds <= 0) {
        this.stop();
        alert("Mining cycle completed!");
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.isMining = false;
    const btn = document.getElementById('miningToggle');
    btn.classList.add('off');
    btn.classList.remove('on');
    document.getElementById('miningStatus').textContent = 'OFF';
  }

  updateUI() {
    const hours = Math.floor(this.totalSeconds / 3600);
    const mins = Math.floor((this.totalSeconds % 3600) / 60);
    const secs = this.totalSeconds % 60;
    
    document.getElementById('miningTime').textContent = 
      `${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    
    document.getElementById('miningSpeed').textContent = 
      `${this.baseSpeed.toFixed(3)} MZLx/hr`;
    
    document.getElementById('totalMined').textContent = 
      `${((86400 - this.totalSeconds) * this.baseSpeed / 3600).toFixed(6)} MZLx`;
  }
}

new MiningSystem();
