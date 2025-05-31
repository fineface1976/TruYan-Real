 document.addEventListener('DOMContentLoaded', () => {
  // Enforce strict dimensions
  function enforceLayout() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    document.querySelector('.video-container').style.height = '70vh';
    document.querySelector('.transaction-panel').style.height = '30vh';
    
    // Button boundary protection
    document.querySelectorAll('button').forEach(btn => {
      btn.style.minWidth = '80px';
      btn.style.height = btn.parentElement.classList.contains('action-row') ? '100%' : '40px';
    });
  }

  window.addEventListener('resize', enforceLayout);
  enforceLayout();
});
