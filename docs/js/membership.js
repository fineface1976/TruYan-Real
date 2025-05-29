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
