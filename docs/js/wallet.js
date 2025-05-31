 // P2P Exchange Modal
document.getElementById('p2pBtn').addEventListener('click', () => {
  document.getElementById('p2pModal').style.display = 'flex';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    document.getElementById('p2pModal').style.display = 'none';
  }
});
