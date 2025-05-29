function showWalletModal() {
  const modal = `
    <div class="wallet-modal">
      <h3>Connect Wallet</h3>
      <button onclick="connectMetaMask()">MetaMask</button>
      <button onclick="connectTruYan()">TruYan Wallet</button>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modal);
}

// Update existing wallet buttons
document.querySelectorAll('.wallet-btn').forEach(btn => {
  btn.addEventListener('click', showWalletModal);
});
