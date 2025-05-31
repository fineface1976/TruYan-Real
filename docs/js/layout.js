 document.addEventListener('DOMContentLoaded', () => {
  // Enforce strict dimensions
  function enforceLayout() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Video/transaction split
    document.querySelector('.video-container').style.height = '70vh';
    document.querySelector('.transaction-panel').style.height = '30vh';
    
    // Prevent text overflow
    document.querySelectorAll('.stat-item').forEach(item => {
      item.style.minWidth = '0';
      item.style.flex = '1 1 auto';
    });
  }

  window.addEventListener('resize', enforceLayout);
  enforceLayout();
});
