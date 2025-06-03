 // Swap/P2P/Save Actions
document.getElementById('swapBtn').addEventListener('click', () => {
  window.open('https://swap.truyan.com', '_blank');
});

document.getElementById('p2pBtn').addEventListener('click', () => {
  const option = prompt("Choose:\n1. E-commerce\n2. Direct Trade");
  if (option === "1") window.open('https://shop.truyan.com', '_blank');
  else if (option === "2") window.open('https://p2p.truyan.com', '_blank');
});

document.getElementById('saveBtn').addEventListener('click', () => {
  window.open('https://earn.truyan.com', '_blank');
});

// P2P Escrow Trade System
document.getElementById('p2pBtn').addEventListener('click', () => {
  // Show trade type selection
  const tradeType = prompt(`Select Trade Type:\n1. Token Exchange\n2. Product/Service`);
  
  if (tradeType === "1") {
    // Token Exchange Flow
    const amount = prompt("Enter MZLx amount:");
    const price = prompt("Enter price per MZLx (in USD):");
    if (amount && price) {
      createTokenEscrow(amount, price);
    }
  } else if (tradeType === "2") {
    // Product/Service Flow
    const description = prompt("Describe your offer:");
    const price = prompt("Enter price (in USD):");
    if (description && price) {
      createProductEscrow(description, price);
    }
  }
});

function createTokenEscrow(amount, price) {
  // Verify Masolite discount eligibility
  const isMasolite = confirm("Is the buyer a verified Masolite? (Discount applies)");
  const finalPrice = isMasolite ? price * 0.95 : price; // 5% discount
  
  // Display escrow summary
  alert(`
    🛡️ Escrow Created!
    Amount: ${amount} MZLx
    Price: $${finalPrice}/MZLx
    Total: $${amount * finalPrice}
    ${isMasolite ? "✅ 5% Discount Applied" : ""}
  `);
  
  // Proceed to payment (simplified)
  if (confirm("Proceed to payment?")) {
    alert("Redirecting to secure payment gateway...");
  }
}
