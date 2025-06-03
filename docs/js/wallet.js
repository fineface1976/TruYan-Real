 // ===== P2P ESCROW SYSTEM =====
document.getElementById('p2pBtn').addEventListener('click', () => {
  const choice = prompt(`P2P Escrow\n\n1. Verify MASOLITE Member\n2. Product/Service Trade\n3. MZLx Token Trade`);
  
  switch(choice) {
    case "1": verifyMasolite(); break;
    case "2": startProductTrade(); break;
    case "3": startTokenTrade(); break;
    default: alert("Invalid selection");
  }
});

// Admin-adjustable settings
const escrowSettings = {
  feePercent: 5, // Default 5% platform fee
  discounts: {
    free: 0,
    bronze: 5,
    silver: 10,
    gold: 15
  }
};

// 1. MASOLITE Verification Flow
function verifyMasolite() {
  const memberId = prompt("Enter MASOLITE ID (e.g. MSL-G123456789):");
  
  if (!memberId) return;
  
  // Simulate database check
  const tier = getMemberTier(memberId); 
  
  if (tier) {
    const discount = escrowSettings.discounts[tier];
    alert(`✅ Verified ${tier.toUpperCase()} Member\nDiscount Eligibility: ${discount}%`);
  } else {
    alert("❌ Not a registered MASOLITE");
  }
}

// 2. Product Trade Flow
function startProductTrade() {
  const memberId = prompt("Buyer's MASOLITE ID (or leave blank if none):");
  const discount = memberId ? escrowSettings.discounts[getMemberTier(memberId)] : 0;
  
  const productDesc = prompt("Product/Service Description:");
  const askingPrice = Number(prompt("Asking Price (USD):"));
  
  if (!productDesc || !askingPrice) return;
  
  const finalPrice = askingPrice * (1 - discount/100);
  const fee = finalPrice * (escrowSettings.feePercent/100);
  
  alert(`🛒 Product Escrow\n\n` +
        `📝: ${productDesc}\n` +
        `🏷️ Original: $${askingPrice}\n` +
        `🔖 ${discount}% Discount: $${finalPrice.toFixed(2)}\n` +
        `💼 Platform Fee (${escrowSettings.feePercent}%): $${fee.toFixed(2)}\n` +
        `💰 You Receive: $${(finalPrice - fee).toFixed(2)}`);
  
  if (confirm("Create Escrow Contract?")) {
    // Blockchain interaction would go here
    alert("📜 Smart Contract Generated!\nBuyer notified to proceed with payment.");
  }
}

// 3. Token Trade Flow 
function startTokenTrade() {
  const memberId = prompt("Buyer's MASOLITE ID (or leave blank if none):");
  const discount = memberId ? escrowSettings.discounts[getMemberTier(memberId)] : 0;
  
  const tokenAmount = Number(prompt("MZLx Amount:"));
  const pricePerToken = Number(prompt("Price per MZLx (USD):"));
  
  if (!tokenAmount || !pricePerToken) return;
  
  const subtotal = tokenAmount * pricePerToken;
  const discountedTotal = subtotal * (1 - discount/100);
  const fee = discountedTotal * (escrowSettings.feePercent/100);
  
  alert(`🪙 Token Escrow\n\n` +
        `🔢 Amount: ${tokenAmount} MZLx\n` +
        `📊 Rate: $${pricePerToken.toFixed(4)}/MZLx\n` +
        `💵 Subtotal: $${subtotal.toFixed(2)}\n` +
        `🎫 ${discount}% Discount: $${discountedTotal.toFixed(2)}\n` +
        `🏦 Fee (${escrowSettings.feePercent}%): $${fee.toFixed(2)}\n` +
        `💰 You Receive: $${(discountedTotal - fee).toFixed(2)}`);
  
  if (confirm("Lock Tokens in Escrow?")) {
    // Smart contract interaction
    alert(`🔒 ${tokenAmount} MZLx locked!\nBuyer must pay $${discountedTotal.toFixed(2)} within 24 hours.`);
  }
}

// Helper function - would connect to your DB in production
function getMemberTier(memberId) {
  if (!memberId) return null;
  
  const prefix = memberId.split('-')[0];
  switch(prefix) {
    case 'MSL': return 'free';
    case 'MSL-B': return 'bronze';
    case 'MSL-S': return 'silver';
    case 'MSL-G': return 'gold';
    default: return null;
  }
}

// ===== OTHER BUTTONS =====
document.getElementById('swapBtn').addEventListener('click', () => {
  window.open('https://swap.truyan.com', '_blank');
});

document.getElementById('saveBtn').addEventListener('click', () => {
  window.open('https://earn.truyan.com', '_blank');
});
