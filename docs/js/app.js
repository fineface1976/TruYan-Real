// Membership Popups
document.querySelectorAll('.membership-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tier = btn.dataset.tier;
    alert(`${tier.toUpperCase()} MEMBER REGISTRATION\n\n` + 
      (tier === 'free' ? 
        "Only email required\nMine 5 MZLx/day\nNo voting" :
      tier === 'early' ? 
        "Buy MZLx to register\nMine 10 MZLx/day\nVoting rights" :
      tier === 'power' ? 
        "₦5,000 membership\nMine 20 MZLx/day\nVeto power" :
        "$50 token purchase\nMine 40 MZLx/day\nPrice veto power"));
  });
});

// Wallet Connection
document.getElementById('connectWallet').addEventListener('click', () => {
  document.getElementById('walletModal').style.display = 'block';
});

// Swap Interface
document.getElementById('swapBtn').addEventListener('click', () => {
  alert("SWAP INTERFACE\n\nFrom: MZLx\nTo: [Select USDT/BNB/NGN]\nAmount: [Input]");
});

// Mining Counter (Updates every 100ms)
setInterval(() => {
  document.getElementById('miningSpeed').textContent = "0.005 MZLx/ms";
  document.getElementById('minedToday').textContent = "12.5 MZLx";
  document.getElementById('minedTotal').textContent = "1,240 MZLx";
}, 100);

// Save & Earn
document.getElementById('saveBtn').addEventListener('click', () => {
  alert("SAVE & EARN (15% APR)\n\n" +
    "1. Direct Bank Deposit\n" +
    "2. Flutterwave Payment\n\n" +
    "Minimum: ₦5,000");
});
