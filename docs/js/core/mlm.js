class MLMSystem {
  constructor() {
    this.levels = 6;
    this.rewardRate = 0.025; // 2.5%
    
    document.getElementById('p2pBtn').addEventListener('click', () => {
      this.showMLMModal();
    });
  }

  showMLMModal() {
    document.getElementById('mlmModal').style.display = 'block';
  }

  distributeRewards(amount, currency) {
    for (let level = 1; level <= this.levels; level++) {
      const reward = amount * this.rewardRate;
      this.sendReward(level, reward, currency);
    }
  }

  sendReward(level, amount, currency) {
    // Implementation for sending rewards
    console.log(`Level ${level} reward: ${amount} ${currency}`);
  }
}

new MLMSystem()
