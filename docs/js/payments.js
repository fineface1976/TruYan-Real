// Initialize Flutterwave
function initFlutterwave() {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.onload = resolve;
    document.head.appendChild(script);
  });
}

// Process MZLx Purchase
async function buyWithFlutterwave(amountNGN) {
  await initFlutterwave();
  
  FlutterwaveCheckout({
    public_key: "FLW_PUBLIC_KEY", // Replace with your key
    tx_ref: `mzlx-${Date.now()}`,
    amount: amountNGN,
    currency: "NGN",
    payment_options: "card, banktransfer",
    customer: {
      email: "user@example.com", // Dynamically set in production
    },
    callback: function(response) {
      if (response.status === "successful") {
        alert(`Success! Tokens will arrive in 2 minutes.`);
        // Backend will handle token distribution via webhook
      }
    },
    onclose: function() {
      console.log("Payment closed");
    }
  });
}

// Add to existing HTML button
document.getElementById("buyWithNaira").addEventListener("click", () => {
  const amount = document.getElementById("nairaAmount").value;
  if (amount) buyWithFlutterwave(amount);
});
