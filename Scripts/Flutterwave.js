const FLUTTERWAVE_KEY = 'YOUR_PUBLIC_KEY'; // Get from dashboard

function initiatePurchase() {
  const amount = document.getElementById('buyAmount').value;
  const referralCode = document.getElementById('referralCode').value;
  
  FlutterwaveCheckout({
    public_key: FLUTTERWAVE_KEY,
    tx_ref: Date.now().toString(),
    amount: calculateNairaEquivalent(amount),
    currency: 'NGN',
    payment_options: 'card,ussd',
    customer: {
      email: 'user@example.com', // Collect from form
      phone_number: '2348012345678'
    },
    callback: function(payment) {
      if (payment.status === 'successful') {
        processTokenPurchase(amount, referralCode);
      }
    }
  });
}

function calculateNairaEquivalent(mzlxAmount) {
  const currentPrice = parseFloat(document.getElementById('currentPrice').textContent);
  return mzlxAmount * currentPrice * 1600; // Assuming $1 = ₦1600
}
