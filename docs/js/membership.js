 // Membership Registration with Flutterwave
document.querySelectorAll('.membership-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const tier = this.id;
    const cost = this.querySelector('.member-label').textContent;
    
    if (tier === 'freeMember') {
      alert('Free membership activated!');
    } else {
      if (confirm(`Register for ${tier} (${cost})?`)) {
        // Flutterwave payment
        FlutterwaveCheckout({
          public_key: "YOUR_FLUTTERWAVE_KEY",
          tx_ref: `truyan-${tier}-${Date.now()}`,
          amount: parseFloat(cost),
          currency: "ETH",
          payment_options: "card,ussd,banktransfer",
          callback: function(response) {
            alert(`Payment successful! ${tier} benefits unlocked.`);
          },
          onclose: function() {
            alert('Payment cancelled');
          }
        });
      }
    }
  });
});
