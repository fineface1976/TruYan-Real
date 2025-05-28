// Netlify Function: Auto-distributes MZLx tokens via Flutterwave webhook
const Web3 = require('web3');
const BSC_RPC = 'https://bsc-dataseed.binance.org/';
const MZLx_CONTRACT = '0x49F4a728BD98480E92dBfc6a82d595DA9d1F7b83';
const ADMIN_WALLET = '0xYourMetaMaskAddress'; // Replace with your address
const PRIVATE_KEY = process.env.PRIVATE_KEY; // Store in Netlify env vars

exports.handler = async (event) => {
  // 1. Verify Flutterwave webhook (compare signatures)
  const flutterwaveSig = event.headers['verif-hash'];
  const computedSig = crypto.createHmac('sha256', process.env.FLW_SECRET_KEY)
    .update(event.body)
    .digest('hex');
  
  if (flutterwaveSig !== computedSig) {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  // 2. Parse payment data
  const { amount, customer } = JSON.parse(event.body).data;
  const tokens = Math.floor(amount * 1000); // 1 NGN = 1000 MZLx

  // 3. Send MZLx tokens via BSC
  const web3 = new Web3(BSC_RPC);
  const contract = new web3.eth.Contract(ERC20_ABI, MZLx_CONTRACT);
  
  const tx = await contract.methods.transfer(customer.email, tokens)
    .send({
      from: ADMIN_WALLET,
      gas: 200000,
      privateKey: PRIVATE_KEY
    });

  return { statusCode: 200, body: JSON.stringify({ txHash: tx.transactionHash }) };
};
