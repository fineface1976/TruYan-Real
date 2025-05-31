document.addEventListener('DOMContentLoaded', () => {
  // Enforce strict dimensions
  function enforceLayout() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    
    // Video/transaction split
    document.querySelector('.video-container').style.height = '70vh';
    document.querySelector('.transaction-panel').style.height = '30vh';
    
    // Button scaling
    document.querySelectorAll('button').forEach(btn => {
      btn.style.minWidth = '0';
      btn.style.flexShrink = '1';
    });
  }

  window.addEventListener('resize', enforceLayout);
  enforceLayout();
});
