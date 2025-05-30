 class WalletManager {
  constructor() {
    this.connected = false;
    this.setupWalletModal();
    this.setupConnectButton();
  }

  setupWalletModal() {
    const modal = document.getElementById('walletModal');
    const connectBtn = document.getElementById('connectWallet');
    
    connectBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Wallet selection buttons
    document.querySelectorAll('[data-wallet]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.connectWallet(btn.dataset.wallet);
        modal.style.display = 'none';
      });
    });
  }

  setupConnectButton() {
    const connectBtn = document.getElementById('connectWallet');
    
    // Check for existing connection
    if (localStorage.getItem('walletConnected')) {
      this.connected = true;
      connectBtn.textContent = 'Connected';
      connectBtn.style.backgroundColor = '#00ff88';
    }
  }

  connectWallet(walletType) {
    console.log(`Connecting ${walletType} wallet...`);
    // Simulate wallet connection
    setTimeout(() => {
      this.connected = true;
      document.getElementById('connectWallet').textContent = 'Connected';
      document.getElementById('connectWallet').style.backgroundColor = '#00ff88';
      localStorage.setItem('walletConnected', 'true');
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WalletManager();
});
