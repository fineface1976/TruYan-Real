const REFERRAL_RATES = [0.025, 0.025, 0.025, 0.025, 0.025, 0.025]; // 6 levels @2.5%

async function processTokenPurchase(amount, referralCode) {
  // Validate purchase
  const minAmount = parseInt(document.getElementById('buyAmount').min);
  if (amount < minAmount) return alert(`Minimum purchase: ${minAmount} MZLx`);
  
  // Process referral rewards
  if (referralCode) {
    const uplineAddresses = await getUplines(referralCode, 6);
    const totalReward = amount * 0.15; // 15% total
    distributeReferralRewards(uplineAddresses, totalReward);
  }
  
  // Execute token transfer
  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  contract.methods.transfer(msg.sender, web3.utils.toWei(amount.toString()))
    .send({ from: userAddress });
}

async function getUplines(referralCode, depth) {
  // Query blockchain for upline addresses
  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  return contract.methods.getUplines(referralCode, depth).call();
}
