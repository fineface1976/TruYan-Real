class MLMTracker {
  constructor() {
    this.referrals = {}; // { referrer: [referred1, referred2] }
  }

  addReferral(referrer, referred) {
    if (!this.referrals[referrer]) this.referrals[referrer] = [];
    this.referrals[referrer].push(referred);
  }

  calculateRewards(referrer) {
    const levels = [
      { depth: 1, rate: 0.05 },  // Level 1: 5%
      { depth: 2, rate: 0.04 },  // Level 2: 4%
      // ... up to 6 levels
    ];

    let totalRewards = 0;
    levels.forEach(level => {
      const referrals = this.getReferralsAtDepth(referrer, level.depth);
      totalRewards += referrals.length * level.rate;
    });

    return totalRewards;
  }

  getReferralsAtDepth(referrer, depth) {
    // Implement BFS to find referrals at each depth
    // (Full implementation in production)
  }
}

// Initialize
const mlmTracker = new MLMTracker();
