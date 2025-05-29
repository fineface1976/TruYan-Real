 // Initialize Mining Toggle
document.getElementById('miningToggle').addEventListener('click', () => {
  const status = document.getElementById('miningStatus');
  status.textContent = status.textContent.includes("ON") 
    ? "Mining: OFF" 
    : "Mining: ON";
});

// Swap Functionality
document.getElementById('swapBtn').addEventListener('click', () => {
  const fromAmount = document.getElementById('fromAmount').value;
  const toToken = document.getElementById('toToken').value;
  
  if (!fromAmount || isNaN(fromAmount)) {
    alert("Enter a valid amount");
    return;
  }
  
  // Mock swap (replace with actual contract call)
  const rate = toToken === "NGN" ? 1000 : 500; // Example rates
  document.getElementById('toAmount').value = (fromAmount * rate).toFixed(2);
  alert(`Swapped ${fromAmount} MZLx to ${toToken}`);
});

// Special Invest Modal
document.getElementById('specialInvestBtn').addEventListener('click', () => {
  const options = confirm("Choose investment method:\nOK for Bank Deposit\nCancel for Flutterwave");
  if (options) {
    alert("Bank deposit form will open here");
  } else {
    alert("Flutterwave payment will launch here");
  }
});
