 // Badge assignment logic
function assignBadge(userTier) {
  const badges = {
    free: '🎖️',
    early: '🥉', 
    power: '🥈',
    star: '🥇'
  };
  return badges[userTier];
}

// Example usage
const user = { tier: 'early' };
document.getElementById('userBadge').textContent = assignBadge(user.tier);

const membershipBenefits = {
  free: {
    miningRate: 5,
    canPost: true,
    canVote: false,
    maxVideoLength: 30
  },
  early: {
    miningRate: 10,
    canPost: true,
    canVote: true,
    maxVideoLength: 60
  },
  power: {
    miningRate: 20,
    canPost: true,
    canVote: true,
    maxVideoLength: 180,
    escrowAccess: true
  },
  star: {
    miningRate: 40,
    canPost: true,
    canVote: true,
    maxVideoLength: 300,
    escrowAccess: true,
    priceVeto: true
  }
};
