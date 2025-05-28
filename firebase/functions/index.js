const functions = require('firebase-functions');
const Web3 = require('web3');
const FLUTTERWAVE_SECRET = process.env.FLW_SECRET_KEY;

// Initialize BSC connection
const web3 = new Web3('https://bsc-dataseed.binance.org/');
const mzlxContract = new web3.eth.Contract(ERC20_ABI, '0x49F4a728BD98480E92dBfc6a82d595DA9d1F7b83');

exports.processPayment = functions.https.onRequest(async (req, res) => {
  // Verify Flutterwave webhook
  const hash = crypto.createHmac('sha256', FLUTTERWAVE_SECRET).update(JSON.stringify(req.body)).digest('hex');
  if (hash !== req.headers['verif-hash']) return res.status(401).send();

  const { amount, customer } = req.body.data;
  
  // Calculate MZLx tokens (1 NGN = 1000 MZLx at $0.001 rate)
  const tokens = Math.floor(amount * 1000);

  // Send tokens
  const tx = await mzlxContract.methods.transfer(customer.email, tokens).send({
    from: '0xYourAdminAddress',
    gas: 200000
  });

  res.status(200).send({txHash: tx.transactionHash});
});
