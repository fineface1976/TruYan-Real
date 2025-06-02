 class MiningSystem {
  constructor() {
    this.totalSeconds = 86400;
    this.speed = 0.001;
    this.isMining = false;
    this.interval = null;

    document.getElementById('miningToggle').addEventListener('click', () => {
      this.isMining ? this.stop() : this.start();
    });
  }

  start() {
    this.isMining = true;
    this.interval = setInterval(() => {
      this.totalSeconds--;
      this.updateUI();
      if (this.totalSeconds <= 0) {
        this.stop();
        alert('Mining complete!');
      }
    }, 1000);
    document.getElementById('miningStatus').textContent = 'ON';
  }

  stop() {
    clearInterval(this.interval);
    this.isMining = false;
    document.getElementById('miningStatus').textContent = 'OFF';
  }

  updateUI() {
    const hours = Math.floor(this.totalSeconds / 3600);
    const mins = Math.floor((this.totalSeconds % 3600) / 60);
    const secs = this.totalSeconds % 60;
    
    document.getElementById('miningTime').textContent = 
      `${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    
    document.getElementById('miningSpeed').textContent = 
      `${this.speed.toFixed(3)} MZLx/hr`;
    
    document.getElementById('totalMined').textContent = 
      `${((86400 - this.totalSeconds) * this.speed / 3600).toFixed(6)} MZLx`;
  }
}

new MiningSystem();
