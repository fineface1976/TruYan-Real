 class MiningSystem {
  constructor() {
    this.miningInterval = null;
    this.sessionTimer = null;
    this.totalMined = 0;
    this.remainingTime = 86400; // 24 hours in seconds
    this.sessionActive = false;

    this.loadSession();
    this.setupButton();
  }

  loadSession() {
    const savedSession = localStorage.getItem('miningSession');
    if (savedSession) {
      const { endTime, mined } = JSON.parse(savedSession);
      if (Date.now() < endTime) {
        this.remainingTime = Math.floor((endTime - Date.now()) / 1000);
        this.totalMined = mined || 0;
        this.startMining(false);
      }
    }
  }

  setupButton() {
    const btn = document.getElementById('miningToggle');
    btn.addEventListener('click', () => {
      if (this.sessionActive) {
        this.stopMining();
      } else {
        this.startMining(true);
      }
    });
  }

  startMining(newSession) {
    if (newSession) {
      this.remainingTime = 86400;
      this.totalMined = 0;
      const endTime = Date.now() + 86400000;
      localStorage.setItem('miningSession', JSON.stringify({ endTime, mined: 0 }));
    }

    this.sessionActive = true;
    const btn = document.getElementById('miningToggle');
    btn.classList.remove('off');
    btn.classList.add('on');

    // Mining counter
    this.miningInterval = setInterval(() => {
      this.totalMined += 0.005;
      document.getElementById('miningSpeed').textContent = '0.005 MZLx/ms';
      document.getElementById('minedTotal').textContent = this.totalMined.toFixed(
