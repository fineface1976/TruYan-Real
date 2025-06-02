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
