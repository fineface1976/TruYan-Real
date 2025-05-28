 // Swap Logic
document.getElementById('swapBtn').addEventListener('click', async () => {
  const fromAmount = document.getElementById('fromAmount').value;
  const toToken = document.getElementById('toToken').value;
  
  if (!fromAmount || fromAmount <= 0) {
    alert("Enter a valid amount");
    return;
  }

  // Simulate swap (replace with actual contract call)
  document.getElementById('toAmount').value = fromAmount * 1000; // Mock rate
  alert(`Swapped ${fromAmount} MZLx to ${toToken}`);
});

// Mining Toggle
document.getElementById('miningToggle').addEventListener('click', () => {
  const status = document.getElementById('miningStatus');
  status.textContent = status.textContent.includes("ON") 
    ? "Mining: OFF" 
    : "Mining: ON";
});

// Special Invest Modal
document.getElementById('specialInvestBtn').addEventListener('click', () => {
  const options = `
    <div class="invest-modal">
      <button onclick="handleBankDeposit()">Bank Transfer</button>
      <button onclick="handleFlutterwave()">Flutterwave</button>
    </div>
  `;
  // Implement modal display logic here
  alert("Special Invest menu will open here");
});
