document.getElementById("flutterwaveBtn").addEventListener("click", () => {
  // Load Flutterwave script dynamically
  const script = document.createElement('script');
  script.src = 'https://checkout.flutterwave.com/v3.js';
  script.onload = () => {
    FlutterwaveCheckout({
      public_key: "FLW_PUBLIC_KEY", // Replace with your key
      tx_ref: `mzlx-${Date.now()}`,
      amount: 1000, // Default 1000 NGN
      currency: "NGN",
      payment_options: "card",
      customer: {
        email: "user@example.com", // Dynamically set in production
      },
      callback: function(response) {
        if (response.status === "successful") {
          alert("Payment successful! Tokens will arrive shortly.");
        }
      },
      onclose: function() {
        console.log("Payment closed");
      }
    });
  };
  document.head.appendChild(script);
});
