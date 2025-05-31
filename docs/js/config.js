// Reward structure (update rates if needed)
const REWARD_CONFIG = {
  tiers: {
    free: { rate: 0.005, label: "Free" },
    early: { rate: 0.01, label: "Early Member" },
    power: { rate: 0.02, label: "Power User" },
    star: { rate: 0.03, label: "Star Member" }
  },
  boosts: {
    save: { multiplier: 1.2, duration: 3600000 },
    share: { multiplier: 1.3, duration: 3600000 },
    comment: { multiplier: 1.5, duration: 1800000 },
    live: { multiplier: 2.0, duration: 3600000 },
    subscription: { multiplier: 1.8, duration: 86400000 }
  }
};
