// ICO Price Calculator
let icoStartDate = new Date().getTime(); // Set actual start date
const DAYS_TOTAL = 90;

function updatePrice() {
  const elapsedDays = Math.floor((Date.now() - icoStartDate) / (1000 * 3600 * 24));
  const basePrice = 0.001;
  const priceIncrease = (0.1 - 0.001) / DAYS_TOTAL;
  
  let currentPrice = basePrice + (priceIncrease * elapsedDays);
  currentPrice = elapsedDays >= DAYS_TOTAL ? 0.2 : Math.min(currentPrice, 0.1);
  
  document.getElementById('currentPrice').textContent = currentPrice.toFixed(3);
  updateMinPurchase(elapsedDays);
}

function updateMinPurchase(days) {
  const minAmount = days >= 90 ? 1 : Math.max(1, 50 - (days * 0.55));
  document.getElementById('minAmount').textContent = `Minimum: ${Math.round(minAmount)} MZLx`;
  document.getElementById('buyAmount').min = Math.round(minAmount);
}

// Update every 60 seconds
setInterval(updatePrice, 60000);
