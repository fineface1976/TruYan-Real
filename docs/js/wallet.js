 // Wallet Connection
document.getElementById('connectWallet').addEventListener('click', () => {
  document.getElementById('walletModal').style.display = 'flex';
});

document.querySelectorAll('.wallet-option').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const walletType = e.target.dataset.wallet;
    document.getElementById('walletModal').style.display = 'none';
    alert(`Connecting to ${walletType}...`);
  });
});
